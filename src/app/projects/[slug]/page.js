"use client"
import Header from './header'
import Image from 'next/image'
import { projects } from '@/app/projects/projects.js'

const Page = ({params}) => {

  const slug = params.slug;  

  const project = projects.find((project => project.slug === slug))
  // const localizedPath = getLocalizedPath({ slug: `/projects/${slug}`, locale })
  // const url = `${SITE_URL}${localizedPath}`

  if (!project) {
  //   notFound()
  }
  
  const { name, src } = project
  
  return (
    <>
      <script
      //   type='application/ld+json'
      //   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {/* <Mdx code={code} /> */}
      </div>
    </>
  )
}

export default Page
