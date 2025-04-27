'use client'

import React from 'react';
import * as SimpleIcons from 'react-icons/si';
import {Zap} from 'lucide-react';

const CustomMarquee = ({ children, reverse, className }) => {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:pause`}>
          <div className="flex shrink-0 items-center justify-around gap-4 pr-4">
            {children}
          </div>
          <div className="flex shrink-0 items-center justify-around gap-4 pr-4" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    );
  };

const StacksCard = () => {
  const icons = [
    'SiHtml5', 'SiCss3', 'SiJavascript', 'SiTypescript', 'SiFigma',
    'SiTailwindcss', 'SiNextdotjs', 'SiReact', 'SiPython', 'SiPostgresql',
    'SiPrisma', 'SiMysql', 'SiFirebase', 'SiGit', 'SiVite',
    'SiVisualstudiocode', 'SiCloudflare', 'SiMarkdown', 'SiJest', 'SiNodedotjs'
  ];

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-4 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <Zap className='size-[18px]' />
        <h2 className='text-sm font-light'>Stacks</h2>
      </div>
      <CustomMarquee className='py-4'>
        {icons.slice(0, 10).map((icon, index) => {
          const IconComponent = SimpleIcons[icon];
          if (!IconComponent) return null; 
          return <IconComponent key={index} className='size-10' />;
        })}
      </CustomMarquee>
      <CustomMarquee className='py-4' reverse>
        {icons.slice(10).map((icon, index) => {
          const IconComponent = SimpleIcons[icon];
          if (!IconComponent) return null; 
          return <IconComponent key={index} className='size-10' />;
        })}
      </CustomMarquee>
    </div>
  );
};

export default StacksCard;