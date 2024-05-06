import React from 'react'
import Link from 'next/link'

function Footer() {
  const socialMediaIconsArray = ["facebook", "instagram", "tiktok", "youtube", "whatsapp"]
  const LinksArray = [
    {id: 1, "name":"Contact-US"}, 
    {id: 2, name:"FAQ"}, 
    {id: 3, name:"Terms & Conditions"}, 
    {id: 4, name: "Exchange/Return"} ]

  
  return (
    <section id='Footer' className='relative w-full h-[230px] bg-white bottom-0 px-6 py-4 text-center border-[1px] border-t-slate-200 '>
      <div className='w-full h-full flex flex-col items-center space-y-5 mt-6'>
      
      {/* Social Media  Icons */}
      <div className='flex gap-10'>
        {socialMediaIconsArray.map((icon)=>{
            return (
              <Link href={"/"} key={icon}>
                <img src={`/icons/SocialMedia/icons8-${icon}.svg`} alt={`${icon}`} 
                  className='w-8 h-8' />
              </Link>
            )       
        })}
      </div>
      {/* ================== */}

      {/* Links */}
      <div className='flex gap-10'>
        {LinksArray.map((link)=>{
          return(
            <Link href="/" key={link.id}>{link.name}</Link>
          )
        })}
      </div>
      {/* ===== */}

      {/* Copy Right */}
      <div className='absolute bottom-7'>
        Copyrights © 2024 <span className='font-semibold'>Zainab-Attire.pk</span>
      </div>
      {/* ========== */}
      </div>
      
      
    </section>
  )
}

export default Footer
