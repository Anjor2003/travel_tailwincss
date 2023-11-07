import React from 'react'
import boraBora from '../assets/borabora.jpg'
import boraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusives Resorts</h1>
      <p className=''>On the Caribbean's Best Beaches</p>
      <div className='grid grid-cols-none md:grid-cols-5 py-4 gap-2 md:gap-4 mt-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={boraBora} alt="borabora" />
        <img className='w-full h-full object-cover' src={boraBora2} alt="borabora2" />
        <img className='w-full h-full object-cover' src={maldives} alt="maldivas" />
        <img className='w-full h-full object-cover' src={maldives2} alt="maldivas2" />
        <img className='w-full h-full object-cover' src={keywest} alt="keywest" />
      </div>
    </div>
  )
}

export default Destinations