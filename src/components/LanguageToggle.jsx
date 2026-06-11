"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n-client";

export default function LanguageToggle({ className = "" }) {
  const { language, t, toggleLanguage } = useI18n();
  const nextLanguage = language === "en" ? "AR" : "EN";

  return (
    <button
      type="button"
      className={`language-toggle ${className}`}
      aria-label={`${t("nav.switchLanguage")} ${nextLanguage}`}
      onClick={toggleLanguage}
    >
      <Languages className="language-toggle__icon" strokeWidth={2.2} />
      <span>{nextLanguage}</span>
    </button>
  );
}
