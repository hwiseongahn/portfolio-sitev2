"use client"
import { ImageGallery } from "react-image-grid-gallery";
import PageTitle from '@/components/page-title';

const imagesArray = [
  {
    alt: "newyork",
    caption: "New York at night (iPhone 13)",
    src: "/photos/newyorkplease.jpg",
  },
  {
    alt: "pangyo",
    caption: "Sunset at Pangyo (iPhone 13)",
    src: "/photos/pangyo.png",
  },
  {
    alt: "calmluhfit",
    caption: "calm luh fit (iPhone 13)",
    src: "/photos/calmluhfit.jpg"
  },
  {
    alt: "torontoplane",
    caption: "Toronto (iPhone 13)",
    src: "/photos/torontoairplane.png",
  },
  {
    alt: "bubly",
    caption: "Bubly Spread (iPhone 13)",
    src: "/photos/bubly.jpg",
  },
  {
    alt: "killam",
    caption: "Killam Library before last exam (iPhone 13)",
    src: "/photos/killam.jpg",
  },
  {
    alt: "daldongnae",
    caption: "kbbq muck (iPhone 13)",
    src: "/photos/daldongnae.jpg"
  },
  {
    alt: "doverstreetmarket",
    caption : "DSM NY (iPhone 13)",
    src : "/photos/doverstreet.jpg"
  }
  
];

export default function Gallery() {
  return (
    <>
      <PageTitle
        title = 'Gallery'
        description = 'A collection of my photos (in no particular order) 📷'
        animate = {true}
      />
      <ImageGallery
          imagesInfoArray={imagesArray}
          columnCount={"auto"}
          columnWidth={280}
          gapSize={22}
      />
      <p>A Gallery</p>

    </>
  )
}