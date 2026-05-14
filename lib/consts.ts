// types/project.ts أو المكان الذي تضع فيه الـ Interface
export type ProjectCategory =
  | "all"
  | "platforms"
  | "ecommerce"
  | "dashboards"
  | "landing"
  | "restaurant"
  | "hotel"
  | "patisserie";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  featured: boolean;
  categories: ProjectCategory[]; // تم التغيير لمصفوفة لدعم أكثر من تصنيف
}

export const projects: Project[] = [
  {
    title: "Costa Blanca Restaurant",
    description: "A stunning restaurant website that showcases the menu, lets customers book a table online, and brings in new guests 24/7.",
    image: "/projects/costablanca-hero.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://costa-blanca-teal.vercel.app/",
    featured: true,
    categories: ["restaurant"],
  },
  {
    title: "Cairo Crystal Hotel",
    description: "A premium hotel website where guests browse rooms, check availability, and complete bookings directly.",
    image: "/projects/hotel.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://cairo-crystal.vercel.app/ar",
    featured: true,
    categories: ["hotel"],
  },
  {
    title: "Lenza Patisserie",
    description: "A beautiful pastry shop website that displays the full product range and takes custom cake orders online.",
    image: "/projects/patissere-lenza.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://cairo-crystal.vercel.app/ar",
    featured: true,
    categories: ["restaurant", "patisserie"], // هنا الحل: المشروع يظهر في القسمين
  },
  {
    title: "Penalty Platform",
    description: "A sports networking platform connecting athletes, coaches, and content creators worldwide.",
    image: "/projects/Penalty.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://www.penalty-app.site/ar",
    featured: true,
    categories: ["platforms"],
  },
  {
    title: "Shop Ship Dropshipping",
    description: "A complete dropshipping platform that lets store owners manage products and track orders from one dashboard.",
    image: "/projects/shop-ship-hero.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://shop-ship-led.vercel.app/ar",
    featured: true,
    categories: ["platforms"],
  },
  {
    title: "Saloon Sineen",
    description: "A cosmetics store that sells products online around the clock and rewards loyal customers with points.",
    image: "/projects/Salon-sineen.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Zod", "Zustand", "Supabase", "Next-intl"],
    demo: "https://salon-sineen.vercel.app/ar",
    featured: true,
    categories: ["ecommerce"],
  },
  {
    title: "Werd Islamic Platform",
    description: "A content platform that serves thousands of users daily with Quran, hadith, and azkar.",
    image: "/projects/werd.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Zustand", "Framer Motion"],
    demo: "https://bondok-werd.vercel.app",
    featured: true,
    categories: ["platforms"],
  },
  {
    title: "Real CRM Dashboard",
    description: "A business control panel giving store owners a live view of revenue, orders, and customer data.",
    image: "/projects/CRM.png?height=300&width=400",
    technologies: ["ReactJs", "Vite", "Tailwind CSS", "Firebase & Firestore", "Zustand"],
    demo: "https://cosmics-umber.vercel.app/",
    featured: true,
    categories: ["dashboards"],
  },
  {
    title: "Tick Done",
    description: "A productivity tool that helps teams stay on top of their work with task lists, timers, and reminders.",
    image: "/projects/tick-done.png?height=300&width=400",
    technologies: ["Next", "MongoDB", "Auth.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://bondok-tick-done.vercel.app",
    featured: false,
    categories: ["dashboards"],
  },
  {
    title: "Mart Shopping",
    description: "A fully functional online store where customers browse by brand or category and track their orders.",
    image: "/projects/fresh-cart.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "TypeScript", "Rest API"],
    demo: "https://fresh-cart-eight-bay.vercel.app/",
    featured: false,
    categories: ["ecommerce"],
  },
  {
    title: "Cookado",
    description: "A recipe community platform where users share, discover, and save recipes.",
    image: "/projects/cookado.png?height=300&width=400",
    technologies: ["Next", "MongoDB", "Tailwind CSS", "next-intl", "Zustand", "Zod", "Framer Motion"],
    demo: "https://cookado.vercel.app",
    featured: false,
    categories: ["platforms"],
  },
  {
    title: "Kai Café",
    description: "A café website that shows the full menu and lets customers place orders online.",
    image: "/projects/kai.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Zustand", "Next intl", "Next Themes"],
    demo: "https://kai-eg.vercel.app",
    featured: false,
    categories: ["restaurant"],
  },
  {
    title: "Services Landing Page",
    description: "A high-converting business website designed to turn visitors into enquiries.",
    image: "/projects/landing-page.png?height=300&width=400",
    technologies: ["ReactJs", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "https://landing-page-seven-puce-71.vercel.app/",
    featured: false,
    categories: ["landing"],
  },
  {
    title: "Cosmetics Ecommerce",
    description: "An online beauty store that sells products 24/7 with a loyalty programme.",
    image: "/projects/cosmics.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Zustand", "Supabase"],
    demo: "https://cosmics-umber.vercel.app/",
    featured: false,
    categories: ["ecommerce"],
  },
  {
    title: "Kai Dashboard",
    description: "A café control panel giving store owners a live view of revenue, orders, and customer data.",
    image: "/projects/kai-dashboard.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Zustand", "Next intl", "Next Themes"],
    demo: "https://kai-eg.vercel.app",
    featured: false,
    categories: ["dashboards"],
  }
];