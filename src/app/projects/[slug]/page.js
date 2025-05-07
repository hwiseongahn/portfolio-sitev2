"use client"
import Header from './header'
import Image from 'next/image'
import { projects } from '@/app/projects/projects.js'

const Page = ({params}) => {

  const slug = params.slug;  

  const project = projects.find((project => project.slug === slug))

  if (!project) {
    notFound()
  }
  
  const { name, src, paragraph } = project
  
  return (
    <>
      <script
      />
      <div className='mx-auto max-w-3xl'>
        <Header {...project} />
        <Image
          src={`/${src}`}
          width={1280}
          height={832}
          alt={name}
          className='my-12 rounded-lg'
          lazy={false}
        />
        <p className='text-md'>{paragraph}</p>
      </div>
    </>
  )
}

export default Page
