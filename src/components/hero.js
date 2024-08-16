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
          className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"
        />
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mx-1'>
          Welcome to Bensons portfolio 
        </h1>
      </div>
    </main>
  )
}