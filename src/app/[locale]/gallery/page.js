"use client";
import { ImageGallery } from "react-image-grid-gallery";
import PageTitle from "@/components/page-title";
import { useTranslations } from "next-intl";

const imagesArray = [
  {
    alt: "me and darsh",
    caption: "me, Rory, and this guy called Darsh (friend's digicam)",
    src: "/photos/meanddarsh.jpg",
  },
  {
    alt: "ib grad",
    caption: "ib grad flick (iPhone 13)",
    src: "/photos/ibgrad.jpg",
  },
  {
    alt: "shopping with lil sis",
    caption: "family trip 0.5 (iPhone 13)",
    src: "/photos/lilsis.jpg",
  },
  {
    alt: "newyork",
    caption: "New York at night (iPhone 13)",
    src: "/photos/newyorkplease.jpg",
  },
  {
    alt: "pangyo",
    caption: "Sunset at Pangyo (iPhone 13)",
    src: "/photos/pangyo.jpg",
  },
  {
    alt: "calmluhfit",
    caption: "calm luh fit (iPhone 13)",
    src: "/photos/calmluhfit.jpg",
  },
  {
    alt: "torontoplane",
    caption: "Toronto (iPhone 13)",
    src: "/photos/torontoairplane.jpg",
  },
  {
    alt: "bubly",
    caption: "Bubly Spread (iPhone 13)",
    src: "/photos/bubly.jpg",
  },
  {
    alt: "killam",
    caption: "Killam Library (iPhone 13)",
    src: "/photos/killam.jpg",
  },
  {
    alt: "dinner with chemistry friends",
    caption: "Dinner with our chemistry teacher and friends (friend's digicam)",
    src: "/photos/chemdinner.jpg",
  },
  {
    alt: "daldongnae",
    caption: "kbbq muck (iPhone 13)",
    src: "/photos/daldongnae.jpg",
  },
  {
    alt: "doverstreetmarket",
    caption: "DSM NY (iPhone 13)",
    src: "/photos/doverstreet.jpg",
  },
];

export default function Gallery() {
  const t = useTranslations("Gallery");
  return (
    <>
      <PageTitle
        title={t("Gallery")}
        description={t("Collection")}
        animate={true}
      />
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={280}
        gapSize={22}
      />
      <p>A Gallery (in no particular order)</p>
    </>
  );
}
