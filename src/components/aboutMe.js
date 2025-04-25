'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

// Placeholder components
import Connect from './connect';
import LocationCard from './locationCard'
import StacksCard from './stacksCard'
import { useRouter } from 'next/navigation';

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

const AboutMe = () => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  const router = useRouter();

  // const handleClick = () => {
  //   router.push('/about');
  // };

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className="relative my-24"
    >
      <motion.h2
        className="text-center text-3xl font-bold sm:text-4xl dark:text-neutral-100"
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
        About Me
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2 dark:text-neutral-100"
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
        <div className="grid gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="grid gap-4">
          <Connect />
          <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
          </div>
        </div>
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link href="https://www.linkedin.com/in/benson-yan-622413201/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            Know more about me
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutMe;
