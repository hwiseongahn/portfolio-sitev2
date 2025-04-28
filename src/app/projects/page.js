"use client"
import ProjectCards from '@/components/project-cards'

export default function page() {
    const projects = [
        {
          slug: 'SummBot',
          name: 'SummBot',
          description: 'Discord bot for summarizing conversations',
          src: '/summbotss.jpg',
          techstack: ['React', 'Next.js', 'Tailwind CSS'],
          selected: true,
          repoUrl: 'https://github.com/hwiseongahn/summdiscordbot'
        },
        {
          slug: 'Algae and CO2',
          name: 'Algae and CO₂ Heat Map',
          description: 'NASA Space Apps Challenge 2024',
          src: '/co2ss.png',
          techstack: ['React', 'Next.js', 'Tailwind CSS'],
          selected: true,
          repoUrl: 'https://github.com/hwiseongahn/NASAcommunitymapping'
        },
        {
          slug: 'ClearCal',
          name: 'ClearCal',
          description: 'Mental Health and Generative AI Hackathon',
          src: '/ClearCal.png',
          techstack: ['React', 'Next.js', 'Tailwind CSS'],
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
        <ProjectCards projects={projects} />
      </>
    )
}
