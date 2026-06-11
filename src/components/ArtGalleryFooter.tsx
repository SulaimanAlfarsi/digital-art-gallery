"use client";

import Link from "next/link";
import { CrowdCanvas } from "@/components/v1/skiper39";
import { useI18n } from "@/lib/i18n-client";

const ArtGalleryFooter = () => {
  const { t } = useI18n();

  return (
    <footer className="gallery-footer">
      <div className="gallery-footer__canvas">
        <CrowdCanvas src="/images/peeps/all-peeps-2.png" rows={15} cols={7} />
      </div>

      <div className="gallery-footer__overlay" />

      <div className="gallery-footer__content">
        <div className="gallery-footer__intro">
          <h2 className="gallery-footer__title">{t("hero.title")}</h2>
          <p className="gallery-footer__subtitle">{t("footer.subtitle")}</p>
          <p className="gallery-footer__description">
            {t("footer.description")}
          </p>
        </div>

        <div className="gallery-footer__bar">
          <nav aria-label="Footer navigation" className="gallery-footer__nav">
            <Link href="/">{t("nav.home")}</Link>
            <Link href="/artworks">{t("nav.artworks")}</Link>
            <Link href="/explore">{t("nav.explore")}</Link>
          </nav>

          <p className="gallery-footer__copyright">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ArtGalleryFooter;
