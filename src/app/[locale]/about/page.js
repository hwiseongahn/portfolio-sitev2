"use client";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <PageTitle
        title={t("About")}
        description={t.rich("Hi", {
          emoji: (chunks) => <span className="font-emoji">{chunks}</span>,
        })}
        animate={true}
      />
      <div className="flex flex-col items-start justify-start gap-4 font-light tracking-normal text-gray-250 leading-relaxed">
        <h1 className="text-2xl font-semibold">Who am I</h1>
        <p>
          {t.rich("I-moved", {
            emoji: (chunks) => <span className="font-emoji">{chunks}</span>,
          })}
        </p>

        <p>
          I wanted to pursue medicine when I was younger but after getting
          rejected from all the pre-med programs I applied to in Grade 12, I
          decided to continue with Computer Science at Dalhousie, my second (and
          only) option. <br />
          <br />
          During my first year, despite having zero coding experience
          (what&apos;s a For Loop? <span className="font-emoji">💔</span>) I
          enjoyed Programming/Software Development, something I did not think I
          would develop an interest in. So much so that after I finished my
          first year instead of transferring to a pre-med program, I decided to
          apply to Waterloo, where I am currently studying Software Engineering.
        </p>

        <h1 className="text-2xl font-semibold">Hobbies</h1>
        <div className="flex flex-col gap-2">
          <Link
            href="https://soundcloud.com/hwiiiiii"
            className="text-orange-500 hover:text-black dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            🎙️ Music (link to SoundCloud)
          </Link>
          <Link
            href="https://www.chess.com/member/hwiseonga"
            className="text-orange-500 hover:text-black dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            ♟️ Chess
          </Link>
          <p>🗣️ Debate</p>
          <p>🏂 Snowboarding</p>
          <p>🇫🇷 French</p>
        </div>
      </div>
    </>
  );
}
