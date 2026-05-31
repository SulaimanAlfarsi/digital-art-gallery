import Navbar from "@/components/Navbar";
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
          <Navbar />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
