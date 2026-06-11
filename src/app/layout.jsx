import { ScrollNavbar } from "@/components/ui/scroll-navigation-menu";
import TransitionProvider from "@/providers/TransitionProvider";
import ArtGalleryFooter from "@/components/ArtGalleryFooter";
import "./globals.css";

export const metadata = {
  title: "Riwaq Art",
  description: "A curated gallery of contemporary digital artworks.",
  metadataBase: new URL("https://riwaq-art.com"),
  openGraph: {
    title: "Riwaq Art",
    description: "Where Culture Meets Digital Creativity.",
    siteName: "Riwaq Art",
    images: [
      {
        url: "/art-logo.png",
        width: 1024,
        height: 1024,
        alt: "Riwaq Art logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riwaq Art",
    description: "Where Culture Meets Digital Creativity.",
    images: ["/art-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <TransitionProvider>
          <ScrollNavbar />
          {children}
          <ArtGalleryFooter />
        </TransitionProvider>
      </body>
    </html>
  );
}
