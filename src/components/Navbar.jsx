import React, {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook,FaInstagram,FaPinterest,FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setnav(!nav)
    setLogo(!logo)
  }

  return (
    <div className='absolute flex w-full justify-between items-center h-20 px-4 z-10 text-white'>
      <div>
        <h1>BEACHES</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={25} />
        <BsPerson size={25} />
      </div>

      {/* Hamburguer*/}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={25}/> : <HiOutlineMenuAlt4 size={25}/>}
      </div>
      {/* mobile menu */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-black':'absolute left-[-100%]'}>
        <div>
        <h1>BEACHES</h1>
        </div>
        <ul>
          <li className='border-b-4'>Home</li>
          <li className='border-b-4'>Destinations</li>
          <li className='border-b-4'>Travel</li>
          <li className='border-b-4'>View</li>
          <li className='border-b-4'>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between mt-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar