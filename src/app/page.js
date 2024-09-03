import About from "@/components/about";
import AboutMe from "@/components/aboutMe";
import DialogeContainer from "@/components/DialogeContainer";
import SelectedProjects from "@/components/projects";
import Hero from "@/components/hero";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <AboutMe />
      <SelectedProjects />
    </main>
    </>
  );
}
