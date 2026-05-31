import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import TransitionProvider from "@/app/src/provider/TransitionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SVG Stroke Page Transition | Codegrid",
  description: "SVG wipe-draw page transition with Next.js and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-barlow-condensed font-dm-sans h-full antialiased"
    >
      <body className="min-h-full">
        <TransitionProvider>
          <NavBar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
