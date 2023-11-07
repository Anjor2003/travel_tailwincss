import React from 'react'
// iconos
import { FaFacebook,FaInstagram,FaPinterest,FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className="max-w-[1240px] mx-auto flex flex-col pr-4">
        <div className='sm:flex text-center justify-between items-center'>
          <h1 className='pl-4'>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[200px] my-4 px-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li >About</li>
            <li>Partnerships</li>
            <li>Carrrers</li>
            <li>Newsrooms</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer