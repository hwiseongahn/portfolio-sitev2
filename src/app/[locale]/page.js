import AboutMe from "@/components/aboutMe";
import SelectedProjects from "@/components/projects";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import { Timeline } from "@/components/timeline";

export const dynamic = "force-static";

export async function generateMetadata() {
  return {
    title: "Hwiseong Ahn",
    description: "Hwiseong's Portfolio",
    openGraph: {
      title: "Hwiseong Ahn",
      description: "Portfolio of Hwiseong Ahn",
      url: "https://hwiportfolio.vercel.app/en",
      siteName: "Hwiseong Ahn",
      images: [
        {
          url: "https://hwiportfolio.vercel.app/preview.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hwiseong Ahn",
      description: "Portfolio of Hwiseong Ahn",
      images: ["https://hwiportfolio.vercel.app/preview.jpg"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

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
