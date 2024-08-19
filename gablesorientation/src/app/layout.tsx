import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coral Gables Internship Orientation",
  description: "Welcome to the City of Coral Gables Innovation and Technology Department!",
  openGraph: {
    title: "Coral Gables Internship Orientation",
    description: "Welcome to the City of Coral Gables Innovation and Technology Department!",
    images: [
      {
        url: "https://miamifilmfestival.com/city-of-coral-gables-logo/",
        width: 800,
        height: 600,
        alt: "City of Coral Gables Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coral Gables Internship Orientation",
    description: "Welcome to the City of Coral Gables Innovation and Technology Department!",
    images: ["https://miamifilmfestival.com/city-of-coral-gables-logo/"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
