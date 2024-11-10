'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const cardVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

export function Timeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-100px' });

  const timelineEvents = [
    {
      year: "2025",
      title: "Advanced Building Innovation Company",
      description: "Software Engineer Intern"
    },
    {
      year: "2024",
      title: "Cornerstone Marketing Realty",
      description: "Business Analyst Intern"
    },
    {
      year: "2023",
      title: "Waterloo Aerial Robotics Group",
      description: "Autonomy Software Developer"
    },
    {
      year: "2023",
      title: "University of Waterloo",
      description: "Bachelors of Computer Science"
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={timelineRef}
      transition={{
        duration: 0.5
      }}
      className="w-full max-w-3xl mx-auto py-12 md:py-16 my-24"
    >
      <motion.h2
        className="text-center text-3xl font-bold sm:text-4xl dark:text-neutral-100 mb-8"
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
        Experience
      </motion.h2>
      <motion.div
        className="flex flex-col items-start gap-8"
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
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="flex items-start gap-4 w-full"
            variants={variants}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-sm font-medium w-20 text-center flex-shrink-0">
              {event.year}
            </div>
            <motion.div 
              className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg p-6 flex-grow"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {event.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}