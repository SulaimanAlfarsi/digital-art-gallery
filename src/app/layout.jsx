import { ScrollNavbar } from "@/components/ui/scroll-navigation-menu";
import TransitionProvider from "@/providers/TransitionProvider";
import ArtGalleryFooter from "@/components/ArtGalleryFooter";
import { I18nProvider } from "@/lib/i18n-client";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

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
    <html
      lang="en"
      dir="ltr"
      className={`${ibmPlexSans.variable} ${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <I18nProvider>
          <TransitionProvider>
            <ScrollNavbar />
            {children}
            <ArtGalleryFooter />
          </TransitionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
