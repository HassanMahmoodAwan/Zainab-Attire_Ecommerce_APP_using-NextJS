import React from 'react'

function NewsLetter() {
  return (
    <div className='flex justify-center w-full mt-14'>
        <div className='flex w-[90%]  justify-center h-[190px]' 
         style={{
            backgroundImage: "url(/images/Hero02.webp)",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
         }}>

            <div className='w-[80%] flex justify-between items-center'>
                
                <h1 className='text-2xl font-semibold text-white'>Subscribe to Our NewsLetter</h1>

                <div className='flex'>
                    <input type="text" placeholder='Enter your Email'
                        className='px-1 py-2 border border-black'  />
                    
                    <button className='text-white bg-black px-4 py-2 border border-black'>Subscribe</button>
                </div>

            </div>

            
        </div>
      
    </div>
  )
}

export default NewsLetter
