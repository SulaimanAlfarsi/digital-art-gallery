import { ScrollNavbar } from "@/components/ui/scroll-navigation-menu";
import TransitionProvider from "@/providers/TransitionProvider";
import ArtGalleryFooter from "@/components/ArtGalleryFooter";
import "./globals.css";

export const metadata = {
  title: "Digital Art Gallery",
  description: "A curated gallery of contemporary digital artworks.",
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
