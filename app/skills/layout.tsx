import { profile } from '@/data/profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Skills | ${profile.name}`,
  description: `Technical skills — ${profile.title}. React, Next.js, Node, React Native, MongoDB, PostgreSQL, Solidity, EVM, Algorand.`,
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 