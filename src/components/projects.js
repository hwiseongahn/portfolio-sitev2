'use client'

import Link from 'next/link'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRightIcon, LightbulbIcon } from 'lucide-react';
import Image from 'next/image';


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
    slug: 'Word Hunt Solver',
    name: 'Word Hunt Solver',
    description: 'This is the description Word Hunt Solver',
    src: '/WHS.png',
    selected: true
  },
  {
    slug: 'Vibify',
    name: 'Vibify',
    description: 'This is the description for Vibify',
    src: '/Vibify.png',
    selected: false
  },
  {
    slug: 'Toronto Neighbourhoods',
    name: 'Toronto Neighbourhoods',
    description: 'This is the description for Toronto Neighbourhoods',
    src: '/Toronto.jpg',
    selected: true
  }
];

const SelectedProjects = () => {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });

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
        Selected Projects
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
        <a
          href='/projects'
          className='rounded-xl border border-solid border-gray-300 px-6 py-2 text-gray-800 hover:text-gray-500'
        >
          See all projects
        </a>
      </div>
    </motion.div>
  );
};

const Card = ({ project }) => {
  const { slug, name, description, src } = project;

  return (
    <Link
        key={slug}
        href={`/projects/${slug}`}
        className='shadow-feature-card dark:shadow-feature-card-dark group relative rounded-xl p-2'
    >
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <LightbulbIcon className='w-4 h-4' />
          <h2 className='font-light'>Project</h2>
        </div>
        <ArrowUpRightIcon className='w-4 h-4 opacity-0 transition-opacity group-hover:opacity-100' />
      </div>
      <div className='relative w-full h-72 rounded-lg overflow-hidden'>
        <Image width={500} height={500} src={src} alt="Picture of the author" className='rounded-lg'/>
      </div>
      <div className='absolute bottom-6 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px]'>
        <h3 className='font-title text-2xl font-bold text-white'>{name}</h3>
        <p className='text-white mt-2'>{description}</p>
      </div>
    </Link>
  );
};

export default SelectedProjects;
