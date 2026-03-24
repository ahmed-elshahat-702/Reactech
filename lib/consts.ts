export type ProjectCategory = "platforms" | "ecommerce" | "dashboards" | "landing";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  featured: boolean;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "kai",
    description: "A Front-End Cafe Web Application for Kai brand to view menu, order, and contact with moderators, with MongoDB database, and responsive design.",
    image: "/projects/kai.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Zustand", "Next intl", "Next Themes"],
    demo: "https://kai-eg.vercel.app",
    featured: false,
    category: "landing",
  },
  {
    title: "Penalty Platform",
    description: "Full Platform for Athletes, coaches, photographers, editors, and content creators from around the world, discover talent, and build your professional network in the sports industry.",
    image: "/projects/Penalty.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Supabase", "Next-intl"],
    demo: "https://www.penalty-app.site/ar",
    featured: true,
    category: "platforms",
  },
  {
    title: "Werd",
    description: "A full-stack Islamic platform for reading and sharing Quranic verses, ahadith, azkar, and more..., with authentication, MongoDB database, and responsive design.",
    image: "/projects/werd.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Zustand", "Framer Motion"],
    demo: "https://bondok-werd.vercel.app",
    featured: true,
    category: "platforms",
  },
  {
    title: "Cookado",
    description: "A full-stack recipe sharing platform with authentication, MongoDB database, and responsive design.",
    image: "/projects/cookado.png?height=300&width=400",
    technologies: ["Next", "MongoDB", "Tailwind CSS", "next-intl", "Zustand", "Zod", "Framer Motion"],
    demo: "https://cookado.vercel.app",
    featured: false,
    category: "platforms",
  },
  {
    title: "Tick Done",
    description: "A full-stack clean and modern task management dashboard with listing, categories, Pomodoro timer, Notifications, Authentication, Database and more.",
    image: "/projects/tick-done.png?height=300&width=400",
    technologies: ["Next", "MongoDB", "Auth.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://bondok-tick-done.vercel.app",
    featured: true,
    category: "dashboards",
  },
  {
    title: "Saloon sineen",
    description: "A full-stack clean and modern cosmetics E-commerce with Products, Services, Points for each purchase, wishList, contact & aboutUs.",
    image: "/projects/Salon-sineen.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "Framer Motion", "Zod", "Zustand", "Supabase", "Next-intl"],
    demo: "https://salon-sineen.vercel.app/ar",
    featured: true,
    category: "ecommerce",
  },
  {
    title: "Mart Shopping ecommerce",
    description: "A Real modern Ecommerce store for shopping in all categories and brands with orders history page, wishList, search in all brands and categories.",
    image: "/projects/fresh-cart.png?height=300&width=400",
    technologies: ["Next", "Tailwind CSS", "TypeScript", "Rest API"],
    demo: "https://fresh-cart-eight-bay.vercel.app/",
    featured: false,
    category: "ecommerce",
  },
  {
    title: "Services Landing page",
    description: "A Real Informational website for web and developing web services.",
    image: "/projects/landing-page.png?height=300&width=400",
    technologies: ["ReactJs", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "https://landing-page-seven-puce-71.vercel.app/",
    featured: true,
    category: "landing",
  },
  {
    title: "Real CRM and dashboard",
    description: "Real CRM admin Panel connects with real ecommerce Store shows Revenue, Orders & its status, Customers, Products & adding it, BestSeller.",
    image: "/projects/CRM.png?height=300&width=400",
    technologies: ["ReactJs", "Vite", "Tailwind CSS", "Firebase & Firestore", "Zustand"],
    demo: "https://cosmics-umber.vercel.app/",
    featured: true,
    category: "dashboards",
  },
];