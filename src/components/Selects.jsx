import React from 'react'
// imagenes
import boraBora from '../assets/borabora.jpg'
import boraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import keywest from '../assets/keywest.jpg'
import SelectsCard from './SelectsCard'


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-10'>
      <h1 className="w-full text-3xl mb-4">MOST SEARCHED DESTINATIONS</h1>
     <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard bg={boraBora} text="Bora Bora" />
      <SelectsCard bg={boraBora2} text="Maldives" />
      <SelectsCard bg={maldives} text="Antigua" />
      <SelectsCard bg={maldives2} text="Cozumel" />
      <SelectsCard bg={maldives3} text="Jamaica" />
      <SelectsCard bg={keywest} text="Key West" />
      </div>  

    </div>
  )
}

export default Selects