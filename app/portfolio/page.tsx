"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategory } from "@/lib/consts";
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Category pills config ────────────────────────────────────────────────────
const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: "All",         value: "all"        },
  { label: "Restaurants", value: "restaurant"  },
  { label: "Hotels",      value: "hotel"       },
  { label: "Patisseries", value: "patisserie"  },
  { label: "E-commerce",  value: "ecommerce"   },
  { label: "Platforms",   value: "platforms"   },
  { label: "Dashboards",  value: "dashboards"  },
  { label: "Landings",    value: "landing"     },
];

// ─── Category Carousel (mobile) / Pills (desktop) ────────────────────────────
function CategoryFilter({
  active,
  onChange,
}: {
  active: ProjectCategory;
  onChange: (v: ProjectCategory) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -130 : 130, behavior: "smooth" });

  return (
    <div className="relative flex items-center gap-1">
      {/* Left arrow — mobile only */}
      <button
        onClick={() => scroll("left")}
        className="md:hidden shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft size={14} />
      </button>

      {/* Pill row — scrollable on mobile, wrapping on desktop */}
      <div
        ref={scrollRef}
        className="
          flex gap-2
          overflow-x-auto md:overflow-x-visible md:flex-wrap
          scroll-smooth snap-x snap-mandatory
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onChange(cat.value)}
              className={`
                snap-start shrink-0 px-4 py-2 rounded-full text-sm font-medium
                border transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Right arrow — mobile only */}
      <button
        onClick={() => scroll("right")}
        className="md:hidden shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="group relative flex flex-col h-full rounded-3xl border border-border/40 bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-background/90 backdrop-blur-md rounded-full text-foreground hover:scale-110 transition-transform shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={22} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category badges — shows all categories the project belongs to */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.categories
            .filter((c) => c !== "all")
            .map((cat) => (
              <span
                key={cat}
                className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10"
              >
                {cat}
              </span>
            ))}
        </div>

        <h3 className="text-xl font-bold mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-5 pt-4 border-t border-border/50">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Explore Demo <ExternalLink size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  // Incrementing key forces AnimatePresence to remount the grid cleanly
  // instead of using `layout` which causes position-glitch on grid reflow
  const [gridKey, setGridKey] = useState(0);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory]
  );

  function handleCategoryChange(val: ProjectCategory) {
    if (val === activeCategory) return;
    setActiveCategory(val);
    setGridKey((k) => k + 1);
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pick your industry below — see websites built for businesses just like yours.
            </p>
          </motion.div>

          {/* Desktop pills — inline with header */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
          </motion.div>
        </div>

        {/* Mobile carousel — below header, full width */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:hidden mb-10"
        >
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32"
            >
              <Layers className="mx-auto text-muted-foreground/30 mb-4" size={56} />
              <p className="text-muted-foreground">No projects in this category yet.</p>
            </motion.div>
          ) : (
            <motion.div
              key={gridKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}