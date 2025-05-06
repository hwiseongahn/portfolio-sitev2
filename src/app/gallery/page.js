"use client"
import Image from "next/image";
import { ImageGallery } from "react-image-grid-gallery";
import PageTitle from '@/components/page-title'

const imagesArray = [
  {
    alt: "Fahmi's bed",
    caption: "Fahmi's bed",
    src: "/photos/p14c.png",
  },
];

export default function Gallery() {
  return (
    <>
      <PageTitle
        title = 'Gallery'
        description = 'A collection of my photos.'
        animate = {true}
      />
      <ImageGallery
          imagesInfoArray={imagesArray}
          columnCount={"auto"}
          columnWidth={280}
          gapSize={22}
      />
      <p>A Gallery</p>
      {/* <Image
          width={1512}
          height={550}
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
          src='/gradient-background-top.png'
          alt=''
          role='presentation'
          priority
      /> */}
    </>
  )
}