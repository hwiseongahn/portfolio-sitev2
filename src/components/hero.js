'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from '../../public/head.png'

const Hero = () => {
  return (
    <div className='my-16 space-y-6'>
      <div className='flex justify-between gap-8'>
        <motion.div
          className='flex flex-col gap-4 md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
            I'm Benson Yan, a Software Developer creating{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'>
              fantastic
            </span>{' '}
            software applications
          </h1>
          <div className='text-muted-foreground text-sm text-slate-500'>Vancouver • UTC/GMT -7</div>
        </motion.div>
        <motion.div
          className='relative hidden size-28 md:block'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <Image
            src={Head}
            className='rounded-full'
            width={112}
            height={112}
            alt='Benson Yan'
            priority
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
