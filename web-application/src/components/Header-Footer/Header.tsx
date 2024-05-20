"use client"

import React, {useState} from 'react'
// import Link from 'next/link';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Log Out",
  ];



  return (

    <>
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='full' className='px-10  '>

     
      {/* Toggle and Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden" />

        <NavbarBrand>
          <img src="/images/Logo.png" alt="Logo" className='w-20 h-12' />
        </NavbarBrand>
      </NavbarContent>
      {/* =============== */}

      <NavbarContent className="hidden sm:flex gap-8" >

        <NavbarItem isActive>
          <Link className='text-pink-800' href="/product-category/sales" >
            Sales *
          </Link>
        </NavbarItem>

        <NavbarItem >
          <Link color="foreground" href="/product-category/newarrival" 
          className={({isActive})=> `${isActive ? 'text-purple-700': 'text-slate-900'}`}>
            New In
          </Link>
        </NavbarItem>

        <NavbarItem >
          <Link href="#"  color='foreground'>
            ReadyTo-wear
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Unstiched
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Embroidered
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
           Contact US
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' >
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
     
    </Navbar>






    {/* <div className='w-full h-[80px] sticky top-0 z-10 bg-white flex justify-center'>
      <div className='h-full w-[90%] grid grid-cols-5'>

        {/* LOGO 
        <div className='col-span-1 flex gap-2 items-center justify-start'>
          <Link href={"/"}>
            <img src="/images/Logo.png" alt="Logo" className='w-20 h-16' />
          </Link>
        </div>
        {/* ===== 


       {/* LINKS 
       <div className='col-span-3 flex gap-5 items-center justify-center'>
        <Link href={"/product-category/newarrival"} className='text-base font-semibold'>New Arrival</Link>
        <Link href={"/printed"} className='text-base font-semibold'>Printed-Suits</Link>
        <Link href={"/party"} className='text-base font-semibold'>Party Wear</Link>
        <Link href={"/fancy"} className='text-base font-semibold'>Fancy Suits</Link>
        <Link href={"/product-category/trendingnow"} className='text-base font-semibold'>Trending-Now</Link>
        <Link href={"/contact"} className='text-base font-semibold'>Contact Us</Link>
       </div>
       {/* ==== 

       {/* ICONS 
       <div className='col-span-1 flex gap-6 items-center justify-end'>
          <img src="/icons/user.svg" alt="user-icon" className='w-4 h-4' />
          <img src="/icons/heart.svg" alt="user-icon" className='w-4 h-4' />
          <img src="/icons/shopping-bag.svg" alt="user-icon" className='w-4 h-4' />
       </div>
       {/* ==== 


      </div>
    </div> */}
    </>
  ); 
}

export default Header
