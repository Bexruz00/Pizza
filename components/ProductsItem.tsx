"use client";

import { PlusIcon } from "@/icons";
import { ProductsType } from '@/types/ProductType'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonUi from "@/ui/ButtonUi";
import Image from "next/image";
import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SavedOrderProduct } from "@/store/OrderSlice";

const ProductItem: FC<{ item: ProductsType }> = ({ item }) => {
  const [orderCount, setOrderCount] = useState<number>(0);
  const [typeId, setTypeId] = useState(0);
  const [sizeId, setSizeId] = useState(0);

  const orderList = useSelector((state: { orderList: ProductsType[] }) => state.orderList);
  const dispatch = useDispatch();

  function handleOrderBtnClick(obj: ProductsType) {
    const isHere = orderList.some(
      (item) => item.id === obj.id && item.sizeId === sizeId && item.typeId === typeId
    );


    setOrderCount(orderCount + 1);
    
    const newOrder = {
      ...obj,
      savedCount: isHere ? orderCount + 1 : 1,
      typeId,
      sizeId,
    };

    dispatch(SavedOrderProduct(newOrder));
  }

  return (
    <div className="w-[280px] mb-[60px]">
      <Image className="w-[260px] h-[260px] mb-[11px]" src={item.img} alt="Product img" width={260} height={260} priority />
      <strong className="font-bold block text-[22px] text-center mb-[20px]">{item.title}</strong>
      <div className="bg-[#F3F3F3] p-[7px] rounded-[10px] mb-[17px]">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger onClick={() => setTypeId(0)} className="product-item w-[50%] text-[14px] cursor-pointer font-bold leading-[100%]" value="тонкое">
              Тонкое
            </TabsTrigger>
            <TabsTrigger onClick={() => setTypeId(1)} className="product-item w-[50%] text-[14px] cursor-pointer font-bold leading-[100%]" value="традиционное">
              Традиционное
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger onClick={() => setSizeId(0)} className="product-item w-[50%] text-[14px] cursor-pointer font-bold leading-[100%]" value="26 см.">
              26 см.
            </TabsTrigger>
            <TabsTrigger onClick={() => setSizeId(1)} className="product-item w-[50%] text-[14px] cursor-pointer font-bold leading-[100%]" value="30 см.">
              30 см.
            </TabsTrigger>
            <TabsTrigger onClick={() => setSizeId(2)} className="product-item w-[50%] text-[14px] cursor-pointer font-bold leading-[100%]" value="40 см.">
              40 см.
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-bold text-[22px]">{item.price} ₽</div>
        <ButtonUi 
          onClick={() => handleOrderBtnClick(item)}
          extraClass="!text-[18px] !h-[40px] !py-[15px] !font-bold "
          icon={<PlusIcon/>}
          iconPosition="left"
          bgColor={orderCount !== 0 ? false : true}
          size="sm"
          type="button"
        >
          Добавить {orderCount !== 0 && <span className="w-[22px] h-[22px] flex items-center bg-[#EB5A1E] rounded-full text-white justify-center text-[13px] leading-[100%]">{orderCount}</span>}
        </ButtonUi>
      </div>
    </div>
  );
};

export default ProductItem;
