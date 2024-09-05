'use client'

import Image from 'next/image'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import me from '../../public/me.jpg'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const Contact = () => {

  const cardsRef = useRef(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })


  return (
    <motion.div
      className='shadow-feature-card dark:shadow-feature-card-dark relative rounded-xl p-1 backdrop-blur-lg'
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
    >
      <div className='flex flex-col gap-6 rounded-[11px] p-4 lg:p-6'>
        <div className='flex gap-12 max-md:flex-col'>
          <div className='relative size-64 max-md:mx-auto'>
            <Image
              src={me}
              width={160}
              height={160}
              className='absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-[20px]'
              alt='Me'
            />
          </div>

          <div className='flex flex-col justify-center px-4'>
            <p className='font-title mb-2 bg-gradient-to-r from-black to-black/70 bg-clip-text text-3xl font-bold text-transparent dark:from-zinc-100 dark:to-zinc-400'>
              Want to contact me?
            </p>
            <p className='text-zinc-800 dark:text-zinc-300'>
              Feel free to reach out to me!{' '}
              <span className='text-muted-foreground'>I'm always free to chat.</span>
            </p>
            <div className='my-8'>
                <a
                    href='mailto:bensonyan778@hotmail.com'
                    className='bg-email-button rounded-full px-4 py-2 text-sm text-white'
                >
                    bensonyan778@hotmail.com
                </a>
                </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact