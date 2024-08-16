"use client"

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Head from '../../public/head.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/gallery",
    label: "Gallery",
  },
  {
    href: "/contacts",
    label: "Contacts",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);
  const pathName = usePathname();

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <header className='flex justify-between items-center py-4 px-3 border-b'>
        <Link href="/">
          <Image src={Head} alt="Logo" className="w-[35px] h-[35px]" width={35} height={35} />
        </Link>
        
        <button 
          className="lg:hidden z-10 w-8 h-8 flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${isOpen ? 
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                            }`} >
          </span>
          <span className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                            'opacity-0' : 'opacity-100'
                            }`} >
          </span>
          <span className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-6 rounded-sm ${isOpen ? 
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                            }`} >
          </span>
        </button>

        <nav className="hidden lg:block">
          <ul className='flex gap-x-5 text-[14px]'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className={`${pathName === link.href ? "text-zinc-900" : "text-zinc-400"}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav 
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b`}
        style={{ height: isOpen ? `${menuHeight}px` : '0px', opacity: isOpen ? 1 : 0 }}
      >
        <ul className='flex flex-col items-center py-4'>
          {navLinks.map((link, index) => (
            <li key={index} className="py-2">
              <Link 
                href={link.href} 
                className={`${pathName === link.href ? "text-zinc-900" : "text-zinc-400"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}