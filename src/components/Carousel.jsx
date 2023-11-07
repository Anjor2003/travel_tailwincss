import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const SliderData = [
  {
    url:"https://images.unsplash.com/photo-1611222566360-ef1f0a8c6451?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url:"https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url:"https://images.unsplash.com/photo-1609067643332-8785d998aee2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  },
]

const Carousel = () => {
  const [slide, setSlide] = useState(0)

  const prevSlide = () => {
    if (slide === 0) setSlide(SliderData.length -1)
    else setSlide(slide - 1)
  }
  const nextSlide = () => {
    if (slide === SliderData.length -1) setSlide(0)
    else setSlide(slide + 1)
  }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-4 md:left-8' />
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-4 md:right-8' />
      {SliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100 transition ease-linear duration-500' : 'opacity-0 transition ease-linear duration-500'}>
          {index === slide  && ( <img className='w-full rounded-md object-cover'key={index} src={item.url} alt="/" />)}
        </div>
      ))}
    </div>
  )
}

export default Carousel