import React from 'react'

function Products({products}:{products:any}) {
  return (
    <div id='Products' className='flex justify-between flex-wrap'>
        {products.map((product:any)=>{
            return(
            <div className='flex flex-col w-[259px] rounded border-[1px] border-slate-100 overflow-hidden space-y-[2px] mb-16'>
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
  )
}

export default Products
