import React from 'react'

export default function page() {
  return (
    <main>
        <div className='py-32 max-w-[800px] mx-auto leading-8 sm:text-left md:text-justify'>
            <div className="flex flex-col gap-3 items-center text-zinc-950">
                <a 
                    className='font-bold text-6xl underline'
                    href="https://www.linkedin.com/in/benson-yan-622413201/">
                    Linkedin
                </a>
                <a 
                    className='font-bold text-6xl underline'
                    href="https://github.com/Ch3mson">
                    Github
                </a>
                <a 
                    className='font-bold text-6xl underline'
                    href="https://www.instagram.com/1800_benson/">
                    Instagram
                </a>
                <a 
                    className='font-bold text-6xl underline'
                    href="https://x.com/ch3mson">
                    Twitter
                </a>
                <a 
                    className='font-bold text-6xl underline'
                    href="https://drive.google.com/file/d/1PRgL4EH54sc7pnVYENwjcnPc9_TssQUN/view?usp=sharing">
                    Resume
                </a>
            </div>
        </div>
    </main>
  )
}