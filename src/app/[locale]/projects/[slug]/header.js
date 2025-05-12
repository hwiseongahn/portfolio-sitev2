'use client'
import { Button } from "@/components/ui/button"
import { projects } from '@/app/[locale]/projects/projects.js'
import { ArrowUpRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'

import Link from 'next/link'

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

const Header = ({name, description, slug}) => {
  console.log(slug);
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`;

  const project = projects.find((project => project.slug === slug))

  return (
    <div className='space-y-8 pt-10'>
      <motion.div
        className='flex items-center gap-3'
        initial={animation.hide}
        animate={animation.show}
      >
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <h2 className='text-muted-foreground'>{description}</h2>
        </div>
      </motion.div>
      <motion.div
        className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        <Link href={project.url} className="" target="_blank" rel="noopener noreferrer">
          <Button
            variant='default'
            className='p-2 group'
            size='lg' 
          >  
          project homepage
          <ArrowUpRightIcon className='m-2 size-5 transition-transform group-hover:-rotate-45' />
          </Button>
        </Link>
        <Link href={project.repoUrl} className="" target="_blank" rel="noopener noreferrer">
          <Button
            variant='default'
            className='p-2 group'
            size='lg'
          >
          source code<SiGithub className="ml-2"/>
          <ArrowUpRightIcon className='m-2 size-5 transition-transform group-hover:-rotate-45' />
          </Button>  
        </Link>
      </motion.div>
    </div>
  )
}
export default Header