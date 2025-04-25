'use client'

import React, { useRef } from 'react';
import { useTheme } from 'next-themes';
import DalLogoDark from '../../public/dal_logo_dark.png';
import DalLogoLight from '../../public/dal_logo_light.webp';
import UWLogo from '../../public/uw_logo.png';
import HCI4GoodLogo from '../../public/hci4good.png';
import { motion, useInView } from 'framer-motion';
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
  const { theme } = useTheme();

  const timelineEvents = [
    {
      year: "September 2025",
      title: "University of Waterloo",
      description: "Bachelor of Software Engineering",
      logo : UWLogo
    },
    {
      year: "June 2024",
      title: "HCI4Good",
      description: "Full-Stack Software Developer Intern",
      logo : HCI4GoodLogo
    },
    {
      year: "September 2023",
      title: "Dalhousie University",
      description: "Bachelor of Computer Science",
      logo : theme === 'dark' ? DalLogoDark : DalLogoLight
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
        className="text-center text-3xl font-bold sm:text-4xl dark:text-neutral-100 mb-12"
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
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-[-0.5px] hidden md:block" />
        <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 md:hidden" />
        
        {/* Timeline events */}
        <div className="relative">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={`${event.year}-${index}`}
                className="mb-16 relative"
                variants={variants}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                {/* Desktop layout - alternating left and right */}
                <div className="hidden md:flex">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform translate-x-[-5px] top-7 w-[10px] h-[10px] rounded-full bg-white dark:bg-white border-2 border-white dark:border-white z-10" />
                  
                  {/* Left side content (even indices) */}
                  {isEven && (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <div className="mb-2 text-right">
                          <span className="text-sm font-semibold inline-block border-b border-gray-300 dark:border-gray-300 pb-1 px-3">
                            {event.year}
                          </span>
                        </div>
                        <motion.div 
                          className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg p-6"
                          variants={cardVariants}
                          whileHover="hover"
                        >
                          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {event.description}
                          </p>
                        </motion.div>
                      </div>
                      <div className="w-1/2 pl-10">
                        <Image
                          src={event.logo}
                          alt={`${event.title} logo`}
                          width={100}
                          height={100}
                          className='mt-8'
                        />
                      </div>
                    </>
                  )}
                  
                  {/* Right side content (odd indices) */}
                  {!isEven && (
                    <>
                      <div className="w-1/2 pr-12 flex justify-end">
                            <Image
                            src={event.logo}
                            alt={`${event.title} logo`}
                            height={100}
                            className='mt-8'
                            />
                      </div>
                      <div className="w-1/2 pl-12">
                        <div className="mb-2">
                          <span className="text-sm font-semibold inline-block border-b border-gray-300 dark:border-gray-300 pb-1 px-3">
                            {event.year}
                          </span>
                        </div>
                        <motion.div 
                          className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg p-6"
                          variants={cardVariants}
                          whileHover="hover"
                        >
                          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {event.description}
                          </p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Mobile layout - all on right side */}
                <div className="flex md:hidden">
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] transform translate-x-[-5px] top-7 w-[10px] h-[10px] rounded-full bg-white dark:bg-white border-2 border-white dark:border-white z-10" />
                  
                  <div className="w-full ml-12">
                    <div className="mb-2">
                      <span className="text-sm font-semibold inline-block border-b border-gray-300 dark:border-gray-300 pb-1 px-3">
                        {event.year}
                      </span>
                    </div>
                    <motion.div 
                      className="shadow-feature-card dark:shadow-feature-card-dark rounded-lg p-6"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}