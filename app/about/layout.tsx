import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: `About ${profile.name} — ${profile.title}. ${profile.metaDescription}`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
