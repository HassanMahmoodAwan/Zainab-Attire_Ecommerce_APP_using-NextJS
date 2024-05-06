import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div className='w-full h-[80px] sticky top-0 z-10 bg-white flex justify-center'>
      <div className='h-full w-[90%] grid grid-cols-5'>

        {/* LOGO */}
        <div className='col-span-1 flex gap-2 items-center justify-start'>
          <img src="/images/Logo.png" alt="Logo" className='w-20 h-16' />
        </div>
        {/* ===== */}


       {/* LINKS */}
       <div className='col-span-3 flex gap-12 items-center justify-center'>
        <Link href={"/"} className='text-md font-semibold'>New Arrival</Link>
        <Link href={"/printed"} className='text-md font-semibold'>Printed-Suits</Link>
        <Link href={"/party"} className='text-md font-semibold'>Party Wear</Link>
        <Link href={"/fancy"} className='text-md font-semibold'>Fancy Suits</Link>
        <Link href={"/contact"} className='text-md font-semibold'>Contact Us</Link>
       </div>
       {/* ==== */}

       {/* ICONS */}
       <div className='col-span-1 flex gap-6 items-center justify-end'>
          <img src="/icons/user.svg" alt="user-icon" className='w-4 h-4' />
          <img src="/icons/heart.svg" alt="user-icon" className='w-4 h-4' />
          <img src="/icons/shopping-bag.svg" alt="user-icon" className='w-4 h-4' />
       </div>
       {/* ==== */}


      </div>
    </div>
  ); 
}

export default Navbar
