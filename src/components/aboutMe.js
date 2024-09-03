'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

// Placeholder components
import CodingHours from './codingHours'
import Connect from './connect';
import FavoriteFramework from './favouriteFramework';
import LocationCard from './locationCard'
import StacksCard from './stacksCard'

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
        className="text-center text-3xl font-bold sm:text-4xl"
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
        className="mt-12 grid gap-4 md:grid-cols-2"
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
            <CodingHours />
            <FavoriteFramework />
          </div>
        </div>
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link
          href="/about"
          className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          Know more about me
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutMe;