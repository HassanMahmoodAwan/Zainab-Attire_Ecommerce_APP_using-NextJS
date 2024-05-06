"use client"
import React, {useRef, useState} from 'react'
import Slider from 'react-slick';

interface HeroImages {
    images:string[]
}


function Hero<HeroImages>() {
    const sliderRef = useRef<Slider>(null)

    const goToPrev = () => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      };
    
    const goToNext = () => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      };


    const images: string[] = [
        "/images/Hero01.webp",
        "/images/Hero02.webp"
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // 3 seconds
        arrows: false,
      }


  return (
    <div className='w-full'>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className='relative'>
            <img src={image} alt={`Image ${index}`} />

              <button className="absolute top-1/2 transform -translate-y-1/2 left-4 opacity-80 hover:opacity-100 transition duration-300 focus:outline-none font-bold text-5xl text-white" onClick={goToPrev}>
                &lt;
              </button>

              <button className="absolute top-1/2 transform -translate-y-1/2 right-4 opacity-80 hover:opacity-100 transition duration-300 focus:outline-none font-bold text-5xl text-white" onClick={goToNext}>
                &gt;
              </button>
          </div>
        ))}
      </Slider>
      
    </div>
  )
}

export default Hero
