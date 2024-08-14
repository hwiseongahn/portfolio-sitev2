"use client"
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
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
     alt: "FAHMI",
     caption: "FAHMI",
     src: "/photos/p5c.png",
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