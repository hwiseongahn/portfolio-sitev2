import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benson Yan Portfolio",
  description: "Bensons Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={`${inter.className} relative`}>
              <Header />
              <main id='skip-nav' className='mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8'>
                {children}
              </main>
              <Footer />
            </body>
    </html>
  );
}
