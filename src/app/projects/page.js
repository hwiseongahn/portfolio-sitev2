"use client"

import ProjectCards from '@/components/project-cards'
import { motion } from 'framer-motion'
import PageTitle from '@/components/page-title'

export default function page() {
  const projects = [
    {
    slug: 'SummBot',
    name: 'SummBot',
    description: 'Discord bot for summarizing conversations',
    src: 'summbotss.jpg',
    techstack: ['Python', 'discord.py', 'Google Gemini', 'AWS'],
    selected: true,
    repoUrl: 'https://github.com/hwiseongahn/summdiscordbot'
    },
    {
        slug: 'Algae and CO2',
        name: 'Algae and CO₂ Heat Map',
        description: 'NASA Space Apps Challenge 2024',
        src: 'co2ss.png',
        techstack: ['Python', 'Flask', 'Folium', 'JavaScript'],
        selected: true,
        repoUrl: 'https://github.com/hwiseongahn/NASAcommunitymapping'
    },
    {
      slug: 'ClearCal',
      name: 'ClearCal',
      description: 'Mental Health and Generative AI Hackathon',
      src: 'ClearCal.png',
      techstack: ['React', 'Node.js', 'Bootstrap', 'Google Gemini'],
      selected: true,
      repoUrl: 'https://github.com/hwiseongahn/genaihackathon'
    },
  ];
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
