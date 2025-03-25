import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from "@/lib/config";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.siteMetadata.title,
  description: config.siteMetadata.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-netlify-site.netlify.app'),
  openGraph: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
