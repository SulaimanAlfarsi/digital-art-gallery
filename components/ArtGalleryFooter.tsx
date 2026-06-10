import Link from "next/link";
import { CrowdCanvas } from "@/components/v1/skiper39";

const ArtGalleryFooter = () => {
  return (
    <footer className="gallery-footer">
      {/* Animated crowd background — sits at the very bottom, behind the content */}
      <div className="gallery-footer__canvas">
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
      </div>

      {/* Soft light gradient overlay so the content stays readable over the crowd */}
      <div className="gallery-footer__overlay" />

      {/* Footer content */}
      <div className="gallery-footer__content">
        <div className="gallery-footer__intro">
          <h2 className="gallery-footer__title">Digital Art Gallery</h2>
          <p className="gallery-footer__subtitle">Explore Art Beyond Borders</p>
          <p className="gallery-footer__description">
            A living space where art, culture, and creativity meet. Wander
            through curated collections, discover stories behind every piece, and
            let imagination move freely between every frame.
          </p>
        </div>

        <div className="gallery-footer__bar">
          <nav aria-label="Footer navigation" className="gallery-footer__nav">
            <Link href="/">Home</Link>
            <Link href="/artworks">Artworks</Link>
            <Link href="/explore">Explore</Link>
          </nav>

          <p className="gallery-footer__copyright">
            © 2026 Digital Art Gallery. Animation by Skiper UI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ArtGalleryFooter;
