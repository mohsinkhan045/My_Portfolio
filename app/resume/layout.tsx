import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume | ${profile.name}`,
  description: `Resume & CV — ${profile.title}. 3+ years. AAM TECH HUB, Octaloop, Telgates. ${profile.education.degree}, COMSATS.`,
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
