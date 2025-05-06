"use client"
import Header from './header'
import Image from 'next/image'
import ProjectPageClient from './projectpageclient';

const Page = ({params}) => {

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
          slug: 'AlgaeandCO2',
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
    const slug = params.slug;  
    console.log(slug);
    const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`;
  
    const project = projects.find((project => project.slug === slug))
    // const localizedPath = getLocalizedPath({ slug: `/projects/${slug}`, locale })
    // const url = `${SITE_URL}${localizedPath}`
  
    if (!project) {
    //   notFound()
    }
  
    const { name, code, description, github, url } = project
  
    // const jsonLd = {
    //   '@context': 'https://schema.org',
    //   '@type': 'SoftwareApplication',
    //   name,
    //   description,
    //   url,
    //   applicationCategory: 'WebApplication',
    //   author: {
    //     '@type': 'Person',
    //     name: SITE_NAME,
    //     url: SITE_URL
    //   },
    //   sameAs: [github],
    //   screenshot: `${SITE_URL}/images/projects/${slug}/cover.png`
    // }
  
    return (
      <>
        <script
        //   type='application/ld+json'
        //   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className='mx-auto max-w-3xl'>
          <Header {...project} />
          <Image
            src={`/images/projects/${slug}/cover.png`}
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
  