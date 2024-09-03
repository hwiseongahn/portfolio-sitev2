import React from 'react'
import Image from 'next/image'
import Techie from '../../public/techie.png'


export default function About() {
  return (
    <div className='py-32 mx-auto leading-8 sm:text-left md:text-justify'>
        <div className="flex items-center pb-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            About
          </h1>
          <Image 
            src={Techie} 
            alt='Wave hand' 
            width={50}
            height={50}
          />
        </div>
        <div className='text-lg space-y-4'>
          <p>
              Hi! My name is Benson Yan and I am a student at The University of Waterloo, studying computer science with a specialization in Artificial Intelligence.
              I am currently in my 2A term, taking Linear Algebra 2, Intro to Statistics, Object Oriented Programming, Logic and Computation, and Cognitive Processes.
          </p>
          <p>
              I have been introduced to coding since grade 10, starting off with HTML/CSS and learning Java in grades 11 and 12. 
              In university, I have branched out to learning C, Python, and JavaScript. 
              Above is the link to my resume if you are interested in learning more about me. 
              Below are some of my notable projects that showcase my abilities as a full-stack web developer and data scientist. 
          </p>
          <p>
          In my recent co-op at Cornerstone Marketing Realty, I took initiative by developing a Streamlit dashboard to expedite
          searching data across 148 Toronto neighbourhoods. The link to the website is <a className="text-blue-500 underline" href="https://toronto-neighbourhood-2021-analysis.streamlit.app/"> here.</a>
          </p>
          <p>
              In my spare time, you will find me playing League of Legends, sleeping, or eating.
          </p>
        </div>
    </div>
  )
}
