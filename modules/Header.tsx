"use client"
import { SavedIcon } from "@/icons"
import { ProductsType } from "@/types/ProductType"
import ButtonUi from "@/ui/ButtonUi"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"

const Header = () => {
    const orderCount = useSelector((state:{orderList:ProductsType[]}) => state.orderList)
  return (
    <header className="flex items-center justify-between bg-white border-b-[1px] border-[#F6F6F6] pb-[40px] ">
        <Link className="flex items-center gap-[16px]" href={"/"}>
            <Image className="w-[38px] h-[38px]" src={"/logo.svg"} alt="Site Logo" width={38} height={38} priority/>
            <div>
                <h1 className="font-black leading-[100%] text-[24px]">REACT PIZZA</h1>
                <p className="text-[16px] text-[#787878] leading-[100%]">Самая вкусная пицца во вселенной</p>
            </div> 
        </Link>
        <ButtonUi bgColor={true} extraClass="!bg-[#fd5f1a] !rounded-[30px]" size="lg">
        <strong className="!text-white text-[16px]">0 ₽</strong>
        <div className="flex items-center pl-[15px] border-l-[1px] border-[#FFFFFF40] gap-[8px]">
            <SavedIcon/>
            <span className="text-white text-[16px] font-bold">{orderCount.length}</span>
        </div>
        </ButtonUi>
    </header>
  )
}

export default Header