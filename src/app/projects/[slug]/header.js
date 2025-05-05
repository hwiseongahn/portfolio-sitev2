'use client'
import { Button } from "@/components/ui/button"

import { ArrowUpRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'

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

const Header = ({name, description, github, code, slug}) => {
  const projects = [
    {
      slug: 'SummBot',
      name: 'SummBot',
      description: 'Discord bot for summarizing conversations',
      src: '/summbotss.jpg',
      selected: true,
      repoUrl: 'https://github.com/hwiseongahn/summdiscordbot'
    },
    {
      slug: 'Algae and CO2',
      name: 'Algae and CO₂ Heat Map',
      description: 'NASA Space Apps Challenge 2024',
      src: '/co2ss.png',
      selected: true,
      repoUrl: 'https://github.com/hwiseongahn/NASAcommunitymapping'
    },
    {
      slug: 'ClearCal',
      name: 'ClearCal',
      description: 'Mental Health and Generative AI Hackathon',
      src: '/ClearCal.png',
      selected: true,
      repoUrl: 'https://github.com/hwiseongahn/genaihackathon'
    },
    {
      slug: 'More',
      name: 'Stay Tuned!',
      description: 'more to come soon...',
      src: '/',
      selected: true,
      repoUrl: '...'
    }
  ];
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

          <Link href={project.repoUrl} className="">
            project homepage
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
        
        <Link href={project.repoUrl} className="">
          hwiseongahn/
          <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
        </Link>
      </motion.div>
    </div>
  )
}
export default Header