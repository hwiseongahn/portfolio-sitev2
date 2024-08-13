import React from 'react';
import Image from 'next/image'
import Hand from '../../public/hand.png'
import Wave from '../../public/wave.png'

export default function Hero() {
  return (
    <main className='text-center px-5 py-[350px]'>
      <div className='flex items-center justify-center'>
        <Image 
          src={Wave} 
          alt='Wave hand' 
          width={50}
          height={50}
        />
        <h1 className='text-4xl md:text-5xl font-bold mx-2'>
          Welcome to Bensons portfolio 
        </h1>
        <Image 
          src={Hand} 
          alt='Hand' 
          width={50}
          height={50}
        />
      </div>
    </main>
  )
}