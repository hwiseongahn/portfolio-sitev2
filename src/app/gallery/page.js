"use client"
import Image from "next/image";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Fahmi's bed",
    caption: "Fahmi's bed",
    src: "/photos/p14c.png",
  },
  {
    alt: "Montreal part 2",
    caption: "Montreal part 2",
    src: "/photos/p13c.png",
  },
  {
    alt: "Montreal part 1",
    caption: "Montreal part 1",
    src: "/photos/p12c.png",
  },
  {
    alt: "Became Toronto's #1 most normal person",
    caption: "Became Toronto's #1 most normal person",
    src: "/photos/p11c.png",
    },
    {
    alt: "it's 3am",
    caption: "dehydrated at 3am",
    src: "/photos/p10c.png",
    },
    {
    alt: "super hot",
    caption: "super hot grill",
    src: "/photos/p9c.png",
    },
    {
    alt: "oakville",
    caption: "oakville!",
    src: "/photos/p8c.png",
    },
    {
    alt: "cypress",
    caption: "cypress mountain!!",
    src: "/photos/p7c.png",
    },
    {
     alt: "North York",
    caption: "north york!!",
    src: "/photos/p6c.png",
  },
  {
    alt: "first coop",
    caption: "first coop",
    src: "/photos/p4c.png",
  },
    {
      alt: "mukbang",
      caption: "mukbanging",
      src: "/photos/p3c.png",
    },
    {
      alt: "kitty",
      caption: "alter ego",
      src: "/photos/p2c.png",
    },
    {
      alt: "cute pic",
      caption: "felt cute",
      src: "/photos/p1c.png",
    },
];

export default function page() {
  return (
    <main>
        <ImageGallery
            imagesInfoArray={imagesArray}
            columnCount={"auto"}
            columnWidth={280}
            gapSize={22}
        />
        <p>Will be regularly updated (2024-08-13)</p>
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
    
  )
}