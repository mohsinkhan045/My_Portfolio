import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: `Blockchain & Web3 portfolio — DeFi, NFTs, Algorand, Ethereum. ${profile.metaDescription}`,
  openGraph: {
    title: `Projects | ${profile.name}`,
    description: `Selected projects — staking, marketplaces, charity vouchers, launchpads.`,
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
