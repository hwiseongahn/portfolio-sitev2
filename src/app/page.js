import About from "@/components/about";
import AboutMe from "@/components/aboutMe";
import DialogeContainer from "@/components/DialogeContainer";
import SelectedProjects from "@/components/projects";
import Hero from "@/components/hero";
import Head from 'next/head';
import Image from "next/image";
import Contact from "@/components/contact";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <AboutMe />
      <Timeline />
      <SelectedProjects />
      <Contact />
    </main>
    </>
  );
}
