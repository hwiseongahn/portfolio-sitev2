import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/components/SessionProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

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

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default async function RootLayout({ children , params }) {
  
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const session = await getServerSession();
  console.log(session);
  
  return (
    <html lang={locale}>
      <body className={`${inter.className} relative`}>
        <NextIntlClientProvider>
          <SessionProvider>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <Header />
              <main id='skip-nav' className='mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8'>
                <div className="relative z-10">
                  {children}
                </div>
                <Image
                  width={1512}
                  height={550}
                  className='absolute left-1/2 top-0 z-0 -translate-x-1/2'
                  src='/gradient-background-top.png'
                  alt=''
                  role='presentation'
                  priority
                />
                <Image
                  width={1512}
                  height={447}
                  className='absolute -bottom-6 left-1/2 z-0 -translate-x-1/2'
                  src='/gradient-background-bottom.png'
                  alt=''
                  role='presentation'
                  priority
                />
              </main>
              <Footer />
            </ThemeProvider>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
