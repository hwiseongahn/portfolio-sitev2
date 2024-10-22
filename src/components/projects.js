'use client'

import Link from 'next/link'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRightIcon, LightbulbIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"


const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
};

// Mock project data
const projects = [
  {
    slug: 'Bet UFC',
    name: 'Bet UFC',
    description: 'Predict fight outcomes',
    src: '/UFC.png',
    selected: true,
    repoUrl: 'https://ufc-client.vercel.app/'
  },
  {
    slug: 'Word Hunt Solver',
    name: 'Word Hunt Solver',
    description: 'To cheat your word hunt games',
    src: '/WHS.png',
    selected: true,
    repoUrl: 'https://github.com/Ch3mson/Word-Hunt-Solver'
  },
  {
    slug: 'Vibify',
    name: 'Vibify',
    description: 'Find your music discovery',
    src: '/Vibify.png',
    selected: true,
    repoUrl: 'https://github.com/Ch3mson/Vibify'
  },
];

const SelectedProjects = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });

  const router = useRouter();

  const handleClick = () => {
    router.push('/projects');
  };

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
    >
      <motion.h2
        className='font-title text-center text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        Featured Projects
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        {projects
          .filter(project => project.selected)
          .map(project => (
            <Card key={project.slug} project={project} src={project.src}/>
          ))}
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
      {/* <Button variant="outline" onClick={handleClick}>
          See all projects
        </Button> */}
        <p className='dark:text-[#f5f5f5] dark:text-foreground text-sm'>
          More coming soon...
        </p>
      </div>
    </motion.div>
  );
};

const Card = ({ project }) => {
  const { slug, name, description, src, repoUrl } = project;

  return (
    <Link
      key={slug}
      href={repoUrl}
      className='shadow-feature-card dark:shadow-feature-card-dark group relative rounded-xl p-2'
    >
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <LightbulbIcon className='w-4 h-4' />
          <h2 className='font-light dark:text-neutral-100'>Project</h2>
        </div>
        <ArrowUpRightIcon className='w-4 h-4 opacity-0 transition-opacity group-hover:opacity-100' />
      </div>
      <div className='relative w-full h-72 rounded-lg overflow-hidden'>
        <Image 
          width={500} 
          height={500} 
          src={src} 
          alt={name} 
          className='rounded-lg object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4'>
          <div className='transition-transform ease-out group-hover:translate-x-2'>
            <h3 className='font-title text-xl sm:text-2xl font-bold text-white'>{name}</h3>
            <p className='text-sm sm:text-base mt-1 text-zinc-200'>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SelectedProjects;
