"use client"

import ProjectCards from '@/components/project-cards'
import { motion } from 'framer-motion'
import PageTitle from '@/components/page-title'
import { projects } from '@/app/projects/projects.js'

export default function page() {
  return (
    <>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <PageTitle
          title='Projects'
          description='A collection of my projects.'
          animate={true}
      />
      <motion.div
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5
        }}
      >
        <ProjectCards projects={projects} />
      </motion.div>
    </>
  )
}
