"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  UtensilsCrossed,
  Hotel,
  CakeSlice,
  ShoppingBag,
  Rocket,
  LayoutDashboard
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Online menus, reservation systems, and ordering pages that fill your tables.",
    href: "/portfolio?category=restaurant",
    color: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    accent: "text-orange-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description: "Booking websites with room listings, availability, and multilingual support.",
    href: "/portfolio?category=hotel",
    color: "from-blue-500/20 to-sky-500/5",
    border: "group-hover:border-blue-500/50",
    accent: "text-blue-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
  },
  {
    icon: CakeSlice,
    title: "Patisseries",
    description: "Elegant storefronts for cakes, pastries, and custom order management.",
    href: "/portfolio?category=patisserie",
    color: "from-pink-500/20 to-rose-500/5",
    border: "group-hover:border-pink-500/50",
    accent: "text-pink-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Full online stores with cart, payments, and inventory — ready to sell.",
    href: "/portfolio?category=ecommerce",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-500/50",
    accent: "text-emerald-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
  },
  {
    icon: Rocket,
    title: "Platforms",
    description: "Complex multi-user platforms and SaaS products built to scale.",
    href: "/portfolio?category=platforms",
    color: "from-violet-500/20 to-purple-500/5",
    border: "group-hover:border-violet-500/50",
    accent: "text-violet-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Admin panels, CRMs, and analytics dashboards connected to your data.",
    href: "/portfolio?category=dashboards",
    color: "from-amber-500/20 to-yellow-500/5",
    border: "group-hover:border-amber-500/50",
    accent: "text-amber-500",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]",
  },
];

export default function IndustriesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-24 overflow-hidden relative bg-background">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Built for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver highly-optimized digital experiences tailored to your sector's unique needs.
          </p>
        </motion.div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button
            ref={nextRef}
            className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          onInit={(swiper) => {
            // @ts-ignore - Swiper navigation works but needs ref assignment
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={1.2} // يظهر جزء من الكارت التاني في الموبايل لزيادة الـ UX
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="!overflow-visible" // عشان الـ Shadow والـ Glow يظهروا
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <Link
                href={industry.href}
                className={`group relative flex flex-col h-[340px] p-8 rounded-3xl border border-border/40 bg-background hover:bg-gradient-to-br transition-all duration-500 ease-out overflow-hidden ${industry.color} ${industry.border} ${industry.glow}`}
              >
                <div className="flex justify-between items-start mb-auto">
                  <div className={`w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center shadow-inner border border-white/5 transition-colors duration-500 ${industry.accent} group-hover:bg-background/80`}>
                    <industry.icon strokeWidth={1.5} className="w-7 h-7" />
                  </div>
                  <div className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out p-2 rounded-full bg-background/50 backdrop-blur-md ${industry.accent}`}>
                    <ArrowRight size={20} />
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-foreground transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}