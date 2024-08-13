"use client"

import React from 'react'
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

  const pathName = usePathname();
  console.log(pathName);

  return (
    <header className='flex justify-between items-center py-4 px-3 border-b'>
        
        <Link href="/">
        <Image src={Head} alt="Logo" className="w-[35px] h-[35px]" width={35} height={35} />
        </Link>
        <nav>
          <ul className='flex gap-x-5 text-[14px]'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className={` ${pathName === link.href ? "text-zinc-900" : "text-zinc-400"}`}>
                      {link.label}
                    </Link>
                </li>
              ))
            }
          </ul>
        </nav>
    </header>
  )
}
