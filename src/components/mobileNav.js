'use client'

import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects"
    },
    {
      href: "/gallery",
      label: "Gallery",
    },
  ]

const MobileNav = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          type='button'
          aria-label='Toggle menu'
          variant='ghost'
        >
          <span className='sr-only'>Toggle menu</span>
          <MenuIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-40'>
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.label} asChild>
            <Link href={`/${locale}${link.href}`} className='flex items-center gap-4'>
              <div>{t(link.label)}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav