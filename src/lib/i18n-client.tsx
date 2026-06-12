"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "ar";
type TranslationTree = {
  [key: string]: string | TranslationTree;
};

interface I18nContextValue {
  dir: "ltr" | "rtl";
  language: Language;
  setLanguage: (language: Language) => void;
  t: (path: string, fallback?: string) => string;
  tCategory: (category: string) => string;
  tCategoryDescription: (category: string, fallback?: string) => string;
  toggleLanguage: () => void;
}

const STORAGE_KEY = "riwaq-art-language";

export const languages: Record<Language, { code: Language; dir: "ltr" | "rtl"; label: string }> = {
  en: {
    code: "en",
    dir: "ltr",
    label: "EN",
  },
  ar: {
    code: "ar",
    dir: "rtl",
    label: "AR",
  },
};

const dictionary: Record<Language, TranslationTree> = {
  en: {
    nav: {
      home: "Home",
      artworks: "Artworks",
      explore: "Explore",
      openMenu: "Open navigation menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch language",
    },
    hero: {
      tagline: "Digital Art Gallery",
      title: "Riwaq Art",
      description: "Where Culture Meets Digital Creativity",
      cta: "Browse Artworks",
    },
    home: {
      eyebrow: "Featured Works",
      heading: "Masterpieces from the Collection",
      featuredDescription:
        "Featuring Mona Lisa, The Starry Night, Girl with a Pearl Earring, and more from the collection.",
    },
    artworks: {
      eyebrow: "Gallery",
      heading: "Artworks",
      description:
        "Browse selected digital pieces across historic movements, cultural stories, and visual experiments.",
      filterLabel: "Filter artworks by category",
      all: "All",
    },
    explore: {
      eyebrow: "Explore",
      heading: "Creative Project Folders",
      description:
        "Browse curated project folders across artistic movements, celebrated artists, and visual stories.",
      works: "works",
    },
    footer: {
      subtitle: "Explore Art Beyond Borders",
      description:
        "A living space where art, culture, and creativity meet. Wander through curated collections, discover stories behind every piece, and let imagination move freely between every frame.",
      copyright: "© 2026 Riwaq Art.",
    },
    categories: {
      Renaissance: "Renaissance",
      "Northern Renaissance": "Northern Renaissance",
      Baroque: "Baroque",
      Impressionism: "Impressionism",
      "Post-Impressionism": "Post-Impressionism",
      Romanticism: "Romanticism",
      "Ukiyo-e": "Ukiyo-e",
      Surrealism: "Surrealism",
    },
    categoryDescriptions: {
      Renaissance: "Leonardo da Vinci and Raphael",
      "Northern Renaissance": "Van Eyck, Bruegel, Durer, and Holbein",
      Baroque: "Vermeer, Velazquez, Rembrandt, Van Dyck, and Hals",
      Impressionism: "Claude Monet",
      "Post-Impressionism": "Van Gogh",
      Romanticism: "J. M. W. Turner",
      "Ukiyo-e": "Hokusai and Hiroshige",
      Surrealism: "Salvador Dali",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      artworks: "الأعمال الفنية",
      explore: "استكشاف",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق القائمة",
      switchLanguage: "تغيير اللغة",
    },
    hero: {
      tagline: "معرض فني رقمي",
      title: "رِواق آرت",
      description: "حيث تلتقي الثقافة بالإبداع الرقمي",
      cta: "تصفّح الأعمال الفنية",
    },
    home: {
      eyebrow: "أعمال مميّزة",
      heading: "روائع من المجموعة الفنية",
      featuredDescription:
        "تضم لوحة الموناليزا، وليلة النجوم، والفتاة ذات القرط اللؤلؤي، والمزيد من روائع المجموعة الفنية.",
    },
    artworks: {
      eyebrow: "المعرض",
      heading: "الأعمال الفنية",
      description:
        "تصفّح أعمالًا رقمية مختارة عبر حركات فنية تاريخية، وقصص ثقافية، وتجارب بصرية.",
      filterLabel: "تصفية الأعمال حسب الفئة",
      all: "الكل",
    },
    explore: {
      eyebrow: "استكشاف",
      heading: "مجلدات المشاريع الإبداعية",
      description:
        "تصفّح مجلدات مشاريع منتقاة عبر الحركات الفنية، والفنانين البارزين، والقصص البصرية.",
      works: "أعمال",
    },
    footer: {
      subtitle: "استكشف الفن بلا حدود",
      description:
        "مساحة نابضة بالحياة يلتقي فيها الفن والثقافة والإبداع. تجوّل بين مجموعات فنية منتقاة، واكتشف القصص خلف كل عمل، ودَع خيالك يتحرّك بحرية بين كل إطار.",
      copyright: "© ٢٠٢٦ رِواق آرت.",
    },
    categories: {
      Renaissance: "عصر النهضة",
      "Northern Renaissance": "عصر النهضة الشمالية",
      Baroque: "الباروك",
      Impressionism: "الانطباعية",
      "Post-Impressionism": "ما بعد الانطباعية",
      Romanticism: "الرومانسية",
      "Ukiyo-e": "الأوكييو-إه",
      Surrealism: "السريالية",
    },
    categoryDescriptions: {
      Renaissance: "ليوناردو دا فينشي ورافائيل",
      "Northern Renaissance": "فان آيك وبروغل ودورر وهولباين",
      Baroque: "فيرمير وفيلازكيز ورمبرانت وفان دايك وهالس",
      Impressionism: "كلود مونيه",
      "Post-Impressionism": "فان غوخ",
      Romanticism: "جيه إم دبليو تيرنر",
      "Ukiyo-e": "هوكوساي وهيروشيغه",
      Surrealism: "سلفادور دالي",
    },
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

function resolvePath(source: TranslationTree, path: string) {
  return path.split(".").reduce<string | TranslationTree | undefined>((value, key) => {
    if (!value || typeof value === "string") {
      return undefined;
    }

    return value[key];
  }, source);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === "ar" || storedLanguage === "en") {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    const { dir, code } = languages[language];
    document.documentElement.lang = code;
    document.documentElement.dir = dir;
    document.documentElement.dataset.language = code;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<I18nContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage === "ar" ? "ar" : "en");
    };

    const toggleLanguage = () => {
      setLanguageState((currentLanguage) => (currentLanguage === "en" ? "ar" : "en"));
    };

    const t = (path: string, fallback = path) => {
      const translated = resolvePath(dictionary[language], path);
      const english = resolvePath(dictionary.en, path);

      if (typeof translated === "string") {
        return translated;
      }

      if (typeof english === "string") {
        return english;
      }

      return fallback;
    };

    const tCategory = (category: string) => t(`categories.${category}`, category);
    const tCategoryDescription = (category: string, fallback = "") =>
      t(`categoryDescriptions.${category}`, fallback);

    return {
      dir: languages[language].dir,
      language,
      setLanguage,
      t,
      tCategory,
      tCategoryDescription,
      toggleLanguage,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
