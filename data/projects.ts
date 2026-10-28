export interface Project {
  id: string;
  name: string;
  category: "Fashion" | "Jewellery" | "Kids" | "Ayurveda" | "Cosmetics" | "Food & Beverage" | "Art" | "Spices" | "Gifting";
  location?: string;
  description: string;
  url: string;
  image: string;
  alt: string;
  featured: boolean;
}

export const PROJECT_CATEGORIES = [
  "All",
  "Fashion",
  "Jewellery",
  "Kids",
  "Ayurveda",
  "Cosmetics",
  "Food & Beverage",
  "Art",
  "Spices",
  "Gifting"
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

export const CLIENT_PROJECTS: Project[] = [
  // 1. FASHION BRANDS
  {
    id: "taruni",
    name: "Taruni",
    category: "Fashion",
    location: "India 🇮🇳",
    description: "Enterprise catalog architecture, high-speed UI optimization, and seamless mobile checkout experiences.",
    url: "https://www.taruni.in/",
    image: "/projects/taruni.webp",
    alt: "Taruni premium ethnic wear website",
    featured: true
  },
  {
    id: "malika-clothing",
    name: "Malika Clothing",
    category: "Fashion",
    location: "Qatar 🇶🇦",
    description: "Multi-currency localization, advanced collection filtering, and high-conversion UI design.",
    url: "https://www.malikaclothing.qa/",
    image: "/projects/malika-clothing.webp",
    alt: "Malika Clothing Qatar fashion website",
    featured: true
  },
  {
    id: "beyura",
    name: "Beyura",
    category: "Fashion",
    location: "India 🇮🇳",
    description: "Contemporary Fashion Brand",
    url: "https://beyura.com/",
    image: "/projects/beyura.webp",
    alt: "Beyura contemporary fashion website",
    featured: false
  },
  {
    id: "wolle",
    name: "Wolle",
    category: "Fashion",
    location: "India 🇮🇳",
    description: "Fashion & Lifestyle Brand",
    url: "https://www.wolle.in/",
    image: "/projects/wolle.webp",
    alt: "Wolle fashion & lifestyle website",
    featured: false
  },
  {
    id: "lavia-deux",
    name: "La Via Deux",
    category: "Fashion",
    location: "Global 🌍",
    description: "Fashion Brand",
    url: "https://laviadeux.com/",
    image: "/projects/lavia-deux.webp",
    alt: "La Via Deux fashion brand website",
    featured: false
  },

  // 2. JEWELLERY & LUXURY GIFTS
  {
    id: "essme-luxury-gifts",
    name: "Essme Luxury Gifts",
    category: "Jewellery",
    location: "UAE 🇦🇪",
    description: "UAE-Based Luxury Jewellery & Gifting Brand",
    url: "https://www.essmeluxurygifts.com/",
    image: "/projects/essme-luxury-gifts.webp",
    alt: "Essme Luxury Gifts UAE website",
    featured: true
  },
  {
    id: "masakali-label",
    name: "Masakali Label",
    category: "Jewellery",
    location: "UAE 🇦🇪",
    description: "UAE-Based Jewellery & Lifestyle Brand",
    url: "https://www.masakalilabel.com/",
    image: "/projects/masakali-label.svg",
    alt: "Masakali Label UAE jewellery & lifestyle website",
    featured: false
  },

  // 3. KIDS PRODUCTS
  {
    id: "adorables",
    name: "Adorables",
    category: "Kids",
    location: "India 🇮🇳",
    description: "Kids Products & Lifestyle",
    url: "https://adorables.online/",
    image: "/projects/adorables.svg",
    alt: "Adorables kids products & lifestyle website",
    featured: false
  },

  // 4. AYURVEDA PRODUCTS
  {
    id: "natara-ayurveda",
    name: "Natara Ayurveda",
    category: "Ayurveda",
    location: "India 🇮🇳",
    description: "Ayurvedic Wellness Brand",
    url: "https://www.nataraayurveda.com/",
    image: "/projects/natara-ayurveda.webp",
    alt: "Natara Ayurveda wellness website",
    featured: true
  },
  {
    id: "sincere-ayurvedics",
    name: "Sincere Ayurvedics",
    category: "Ayurveda",
    location: "India 🇮🇳",
    description: "Ayurvedic Products & Wellness",
    url: "https://www.sincereayurvedics.com/",
    image: "/projects/sincere-ayurvedics.webp",
    alt: "Sincere Ayurvedics products & wellness website",
    featured: false
  },

  // 5. COSMETICS
  {
    id: "nathabit",
    name: "Naat Habit",
    category: "Cosmetics",
    location: "India 🇮🇳",
    description: "Custom Liquid theme development, lightning-fast asset loading, and engaging product storytelling layouts.",
    url: "https://www.nathabit.in/",
    image: "/projects/nathabit.webp",
    alt: "Naat Habit beauty & cosmetics website",
    featured: false
  },

  // 6. FOOD & BEVERAGE
  {
    id: "domnom",
    name: "Domnom",
    category: "Food & Beverage",
    location: "India 🇮🇳",
    description: "Food & Beverage Brand",
    url: "https://www.domnom.in/",
    image: "/projects/domnom.webp",
    alt: "Domnom food & beverage website",
    featured: false
  },
  {
    id: "gocs",
    name: "GOCS",
    category: "Food & Beverage",
    location: "Global 🌍",
    description: "Food & Beverage Brand",
    url: "https://www.gocs.shop/",
    image: "/projects/gocs.svg",
    alt: "GOCS food & beverage brand website",
    featured: false
  },

  // 7. ART
  {
    id: "poiema",
    name: "Poiema",
    category: "Art",
    location: "India 🇮🇳",
    description: "Art & Creative Brand",
    url: "https://www.poiema.in/",
    image: "/projects/poiema.webp",
    alt: "Poiema art & creative website",
    featured: false
  },

  // 8. SPICES
  {
    id: "seasonsync",
    name: "SeasonSync",
    category: "Spices",
    location: "India 🇮🇳",
    description: "Premium Spices & Food Brand",
    url: "https://seasonsync.in/",
    image: "/projects/seasonsync.webp",
    alt: "SeasonSync spices and food website",
    featured: true
  },

  // 9. GIFTING
  {
    id: "beyond-be-bella",
    name: "Beyond Be Bella",
    category: "Gifting",
    location: "Australia 🇦🇺",
    description: "Bespoke gift-builder integration, custom cart drawers, and streamlined checkout UX.",
    url: "https://beyondbebella.com/",
    image: "/projects/beyond-be-bella.webp",
    alt: "Beyond Be Bella Australia gifting website",
    featured: true
  }
];

export const FEATURED_PROJECTS = CLIENT_PROJECTS.filter((p) => p.featured);
