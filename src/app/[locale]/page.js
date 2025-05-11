import AboutMe from "@/components/aboutMe";
import SelectedProjects from "@/components/projects";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import { Timeline } from "@/components/timeline";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <AboutMe />
      <Timeline />
      <SelectedProjects />
      <Contact/>
    </main>
    </>
  );
}
