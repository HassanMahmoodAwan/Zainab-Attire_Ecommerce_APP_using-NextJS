import React from 'react'

function Products() {

    const data = [
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
        }
    ]


  return (
    <div className="flex justify-center w-full ">
    <div className='flex w-[90%] gap-10'>

        {data.map((product)=>{
            return(
            <div className='flex flex-col w-[259px] rounded border-[1px] border-slate-100 overflow-hidden space-y-[2px]'>
            <img src="/images/Suit-Images/new01.webp" alt="suit Image"
                className="mb-5 h-[260px]" />
            <p className='text-gray-500 text-xs'>{product.headline}</p>
            <h5 className='text-md font-semibold'>{product.title}</h5>
            <h4 className='text-sm text-gray-600'>
                RS
                <span className='font-semibold'>{product.price}</span>
            </h4>
            </div>
            )
        })}  
      
    </div>
    </div>
  )
}

export default Products
