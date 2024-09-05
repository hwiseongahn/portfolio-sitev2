import About from "@/components/about";
import AboutMe from "@/components/aboutMe";
import DialogeContainer from "@/components/DialogeContainer";
import SelectedProjects from "@/components/projects";
import Hero from "@/components/hero";
import Head from 'next/head';
import Image from "next/image";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <AboutMe />
      <SelectedProjects />
      <Contact />
      <Image
            width={1512}
            height={550}
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
            src='/gradient-background-top.png'
            alt=''
            role='presentation'
            priority
          />
          <Image
            width={1512}
            height={447}
            className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
            src='/gradient-background-bottom.png'
            alt=''
            role='presentation'
            priority
          />
    </main>
    </>
  );
}
