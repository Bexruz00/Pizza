"use client"
import ProductsItem from "../components/ProductsItem"
import { Context } from '@/context/Context'
import {getRequest} from '@/services/getRequest'
import { ProductsType } from '@/types/ProductType'
import React, {useContext} from 'react'

const Products = () => {
    const {categoryId}  = useContext(Context)
    const {data:productsList, isLoading} = getRequest(`/products`, "products", categoryId)
    
  return (
    <div>
        <h2 className='font-black text-[32px] mb-[35px]'>Все пиццы</h2>
        <div className='flex items-center justify-between flex-wrap'>
             {isLoading ? "loading" : productsList.map((item:ProductsType) => <ProductsItem key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default Products