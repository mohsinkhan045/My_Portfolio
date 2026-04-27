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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
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
      <body className={`${inter.className} min-h-screen`}>
        <div
          className="mesh-bg pointer-events-none fixed inset-0 -z-10"
          aria-hidden
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="relative z-0 flex-grow pt-[4.25rem] sm:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
