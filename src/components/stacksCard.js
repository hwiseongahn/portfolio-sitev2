'use client'

import React from 'react';
import {
  SiCloudflare,
  SiCss3,
  SiDrizzle,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest
} from '@icons-pack/react-simple-icons'
import {Zap} from 'lucide-react';

const CustomMarquee = ({ children, reverse, className }) => {
  return (
    <div className={`overflow-hidden ${className} ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} w-[53rem]`}>
      <div className={`flex hover:pause`}>
        <div className="flex shrink-0 items-center justify-around gap-0 pr-0">
          {children}
        </div>
        <div className="flex shrink-0 items-center justify-around gap-0 pr-0">
          {children}
        </div>
      </div>
    </div>
  );
};

const StacksCard = () => {
  const icons = [
    'SiHtml5', 'SiCss3', 'SiJavascript', 'SiTypescript', 'SiFigma',
    'SiTailwindcss', 'SiNextdotJs', 'SiReact', 'SiPython', 'SiPostgresql',
    'SiPrisma', 'SiMysql', 'SiFirebase', 'SiGit', 'SiVite',
    'SiVisualStudioCode', 'SiCloudflare', 'SiMarkdown', 'SiJest', 'SiNodeDotJs'
  ];

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-4 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <Zap className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <div className='overflow-hidden'>
        <CustomMarquee className='py-4'>
          {[SiPrisma, SiMysql, SiFirebase, SiGit, SiVite, SiDrizzle, SiCloudflare, SiMarkdown, SiVitest, SiNodedotjs].map((Icon, index) => (
            <Icon key={index} className='w-[2.65rem]' />
          ))}
        </CustomMarquee>
      </div>
      <div className='overflow-hidden'>
        <CustomMarquee className="py-4" reverse={true}>
          {[SiHtml5, SiCss3, SiJavascript, SiTypescript, SiFigma, SiTailwindcss, SiNextdotjs, SiReact, SiPython, SiPostgresql].map((Icon, index) => (
            <Icon key={index} className='w-[2.65rem]' />
          ))}
        </CustomMarquee>
      </div>
    </div>  
  );
};

export default StacksCard;