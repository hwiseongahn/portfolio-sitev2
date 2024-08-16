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
          width={40}
          height={40}
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
        />
        <h1 className='text-lg md:text-3xl lg:text-5xl font-bold mx-2'>
          Welcome to Bensons portfolio 
        </h1>
        <Image 
          src={Hand} 
          alt='Hand' 
          width={40}
          height={40}
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
        />
      </div>
    </main>
  )
}