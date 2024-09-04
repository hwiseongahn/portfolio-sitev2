import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benson Yan Portfolio",
  description: "Bensons Portfolio",
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={`${inter.className} relative`}>
              <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
                <Header />
                <main id='skip-nav' className='mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8'>
                  {children}
                </main>
                <Footer />
              </ThemeProvider>
            </body>
    </html>
  );
}
