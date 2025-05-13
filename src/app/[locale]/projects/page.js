"use client"

import ProjectCards from '@/components/project-cards'
import { motion } from 'framer-motion'
import PageTitle from '@/components/page-title'
import { projects } from '@/app/[locale]/projects/projects.js'
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations("Projects");
  return (
    <>
      {/* <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <PageTitle
          title={t("Projects")}
          description={t("Collection")}
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
