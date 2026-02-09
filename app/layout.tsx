import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Arif ali koyani - Full Stack Developer",
  description: "Seasoned backend developer with 3+ years of experience architecting scalable server-side solutions. Specializing in Node.js ecosystems, React.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Backend Developer", "Node.js", "React", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
  authors: [{ name: "Arif ali koyani" }],
  openGraph: {
    title: "Arif ali koyani - Full Stack Developer",
    description: "Seasoned software developer with 3+ years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
