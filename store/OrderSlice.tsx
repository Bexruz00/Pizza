// import {PayloadAction, createSlice} from "@reduxjs/toolkit"
// import { ProductsType } from "../types/ProductType"

// interface OrderType {
//     orderList:ProductsType[]
// }

// const initialState:OrderType = {
//     orderList:[]
// }

// export const OrderSlice = createSlice({
//     name:"orderList",
//     initialState,
//     reducers:{
//         SavedOrderProduct:(state:OrderType, action:PayloadAction<ProductsType>):OrderType | any => {
//             return {
//                 orderList:[...state.orderList, action.payload]
//             }
//         }
//     }
// })

// export const {SavedOrderProduct} = OrderSlice.actions

"use client";

import { ProductsType } from "@/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderType {
  orderList: ProductsType[];
}

const initialState: OrderType = {
  orderList: [],
};

export const OrderSlice = createSlice({
  name: "order_list",
  initialState,
  reducers: {
    SavedOrderProduct: (state: OrderType, action: PayloadAction<ProductsType>): OrderType => {
      const isHere = state.orderList.some(
        (item) =>
          item.id === action.payload.id &&
          item.sizeId === action.payload.sizeId &&
          item.typeId === action.payload.typeId
      );

      if (isHere) {
        const result = state.orderList.map((item: ProductsType) =>
          item.id === action.payload.id ? action.payload : item
        );
        return { orderList: result };
      } else {
        return { orderList: [...state.orderList, action.payload] };
      }
    },
  },
});

export const { SavedOrderProduct } = OrderSlice.actions;
