"use client";
import PageTitle from '@/components/page-title';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function About() {

  return (
    <>
      <PageTitle
        title='About'
        description={"👋 Hi! My name is Hwiseong and I'm interested in building things (usually software)."}
        animate={true}
      />
      <div className='flex flex-col items-start justify-start gap-4'>
        <h1 className='text-2xl font-semibold'>Hobbies</h1>
        <div className='flex flex-col gap-2'>
          <Link 
            href="https://soundcloud.com/hwiiiiii" 
            className="text-orange-500 hover:text-black dark:hover:text-white transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            🎙️ Music
          </Link>
          <Link 
            href="https://www.chess.com/member/hwiseonga" 
            className="text-orange-500 hover:text-black dark:hover:text-white transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            ♟️ Chess
          </Link>
          <p>🗣️ Debate</p>
          <p>🏂 Snowboarding</p>
          <p>🇫🇷 French</p>
        </div>  
      </div>  
    </>
  );
}