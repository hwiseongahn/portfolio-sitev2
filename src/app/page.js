import About from "@/components/about";
import DialogeContainer from "@/components/DialogeContainer";
import Hero from "@/components/hero";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <About />
      <DialogeContainer />
    </main>
    </>
  );
}
