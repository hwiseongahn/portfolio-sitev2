import React from 'react'
import { DialogBasicOne } from './DialogeCard'
import Image from 'next/image'
import Cooking from '../../public/cooking.png'
import { projects } from '../constants/index';

export default function DialogeContainer() {
  return (
    <main className='max-w-[800px] mx-auto py-32'>
      <div className='flex items-center'>
        <h1 className='text-4xl md:text-5xl font-bold py-2'>
            Projects 
        </h1>
        <Image 
            src={Cooking} 
            alt='Chef' 
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-row flex-wrap gap-2 mx-auto items-center">
            {projects.map((project, index) => (
              <DialogBasicOne 
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                imageSrc={project.imageSrc}
                description1={project.description1}
                description2={project.description2}
                projectLink={project.projectLink}
              />
            ))}
        </div>
    </main>
  )
}
