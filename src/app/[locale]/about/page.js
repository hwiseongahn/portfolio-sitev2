"use client";
import PageTitle from '@/components/page-title';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <PageTitle
        title={t("About")}
        description={t("Hi")}
        animate={true}
      />
      <div className='flex flex-col items-start justify-start gap-4'>
        <h1 className='text-2xl font-semibold'>Who am I</h1>
        <p className='font-light tracking-normal text-gray-250 leading-relaxed'>I moved so a lot when I was younger, so when people ask me where I&apos;m from I say Halifax but I also spent a 
          significant part of my childhood in Toronto, Queens (NYC), and half a year in Seoul (I&apos;m Korean🇰🇷).
         <br/><br/>
         I wanted to pursue medicine when I was younger but after getting rejected from
         all the pre-med programs I applied to in Grade 12, I decided to continue with Computer Science, my second (and only) option. <br/><br/>
         During my first year, despite having zero coding experience (what&apos;s a For Loop? 💔) I enjoyed
         Programming/Software Development, something I did not think I would develop an interest in. So much so that after I finished my first year, although I had reapplied and got accepted to the pre-med programs
         that I was rejected from, I decided to continue with Computer Science as it was simply more exciting. 
        </p>

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