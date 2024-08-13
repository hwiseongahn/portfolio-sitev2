"use client"
import { ImageGallery } from "react-image-grid-gallery";
import Image from 'next/image'
import Leetcode from '../../../public/leetcode.jpg'

const imagesArray = [
    {
    alt: "it's 3am",
    caption: "dehydrated at 3am",
    src: "/photos/p10.png",
    },
    {
    alt: "super hot",
    caption: "super hot grill",
    src: "/photos/p9.jpg",
    },
    {
    alt: "oakville",
    caption: "oakville!",
    src: "/photos/p8.jpg",
    },
    {
    alt: "cypress",
    caption: "cypress mountain!!",
    src: "/photos/p7.jpg",
    },
    {
     alt: "North York",
     caption: "north york!!",
     src: "/photos/p6.jpg",
    },
    {
     alt: "FAHMI",
     caption: "FAHMI",
     src: "/photos/p5.png",
    },
    {
     alt: "first coop",
     caption: "first coop",
     src: "/photos/p4.png",
    },
    {
      alt: "mukbang",
      caption: "mukbanging",
      src: "/photos/p3.jpg",
    },
    {
      alt: "kitty",
      caption: "alter ego",
      src: "/photos/p2.png",
    },
    {
      alt: "cute pic",
      caption: "felt cute",
      src: "/photos/p1.png",
    },
];

export default function page() {
  return (
    <div>
        <ImageGallery
            imagesInfoArray={imagesArray}
            columnCount={"auto"}
            columnWidth={280}
            gapSize={22}
        />
        <p>Will be regularly updated (2024-08-13)</p>
    </div>
  )
}