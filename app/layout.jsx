import Link from "next/link";
import { ScrollNavbar } from "@/components/ui/scroll-navigation-menu";
import TransitionProvider from "@/app/src/provider/TransitionProvider";
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
          <footer className="site-footer">
            <div className="site-footer-inner">
              <Link href="/" aria-label="Home" className="site-footer-brand">
                <span aria-hidden="true" className="site-footer-logo" />
              </Link>
              <div className="site-footer-copy">
                <p>Curated artworks, museum stories, and visual history.</p>
                <span>© 2026 Digital Art Gallery.</span>
              </div>
              <nav aria-label="Footer navigation" className="site-footer-links">
                <Link href="/artworks">Artworks</Link>
                <Link href="/explore">Explore</Link>
              </nav>
            </div>
          </footer>
        </TransitionProvider>
      </body>
    </html>
  );
}
