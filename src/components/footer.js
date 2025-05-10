"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import SELogoDark from '../../public/logo_w.svg'
import SELogoLight from '../../public/logo_b.png'
import { useEffect, useState } from 'react'
const FOOTER_LINKS = [
  {
    id: 'general',
    links: [
      { href: '/', text: 'Home' },
      { href: '/gallery', text: 'Gallery' },
      { href: '/projects', text: 'Projects' },
    ]
  },
  {
    id: 'social',
    links: [
      { href: 'https://www.linkedin.com/in/hwiseongahn/', text: 'LinkedIn' },
      { href: 'https://github.com/hwiseongahn', text: 'GitHub' },
    ]
  },
]

const Footer = () => {
  const [isDark, setIsDark] = useState(false)
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])
  
  return (
    <footer className='bg-background/30 relative mx-auto mb-6 flex max-w-5xl flex-col rounded-2xl p-8 shadow-sm saturate-100 backdrop-blur-[10px]'>
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
            {list.links.map((link) => {
              const { href, text } = link

              return (
                <Link 
                  key={href} 
                  href={href} 
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  {text}
                </Link>
              )
            })}
          </div>
        ))}
      </div>
      <div className='mt-20 text-sm flex justify-between items-center'>
        <div>&copy; {new Date().getFullYear()} Hwiseong Ahn</div>
        <div className='flex items-center gap-2'>
          <a href='https://se-webring.xyz/' target='_blank' rel='noopener noreferrer'>
            <Image
              src={isDark ? SELogoDark : SELogoLight}
              alt='SE Webring'
              width={24}
              height={24}
            />
          </a>
          <a href="https://se-webring.xyz/" target='_blank' rel='noopener noreferrer'>
            <p>SE Webring</p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer