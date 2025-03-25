import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Muhammad Mohsin Saleem',
  description: 'Explore my technical skills and expertise as a Full Stack Blockchain Developer',
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 