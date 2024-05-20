"use client"
import Products from "@/components/Products-Inventory/Products"
import Title from '@/components/Products-Inventory/Title'
import React from 'react'


function page() {
  
  const products = [
    {
        title: "Apple Green Mirror & Cut worked Kurta", headline:"Exclusive Kurta",
        new:true, price:"6,499.00"
    },
    {
        title: "Teal Gray Kurta Shirt", headline:"Royal Kurta",
        new:true, price:"10,999.00"
    },
    {
        title: "Ivory White Color & Kurta Pant", headline:"Exclusive Pant",
        new:false, price:"4,499.00"
    },
    {
        title: "Green Royal Stiched Work", headline:"Exclusive Kurta",
        new:true, price:"8,999.00"
    },

    {
      title: "Green Royal Stiched Work", headline:"Exclusive Kurta",
      new:true, price:"8,999.00"
    }
]

    
  return (
    <div className='w-full flex justify-center my-14'>
        <div className='w-[90%] space-y-16'>

            <Title title="Trending Now" />

            <Products products = {products} />
            
        </div>
    </div>
  )
}

export default page
