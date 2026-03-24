"use client";

import { projects, type Project } from "@/lib/consts";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  Megaphone,
  Globe2,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

// ── Category config ───────────────────────────────────────────────────────────
const CATEGORY_META = {
  all:        { label: "All Work",   icon: Layers          },
  platforms:  { label: "Platforms",  icon: Globe2          },
  ecommerce:  { label: "E-commerce", icon: ShoppingBag     },
  dashboards: { label: "Dashboards", icon: LayoutDashboard },
  landing:    { label: "Landings",   icon: Megaphone       },
};

type CategoryId = keyof typeof CATEGORY_META;

// ── Tech tag colors ───────────────────────────────────────────────────────────
const TECH_COLORS: [string, string][] = [
  ["next",       "bg-primary/10 text-primary border-primary/20"],
  ["react",      "bg-sky-500/10 text-sky-400 border-sky-500/20"],
  ["tailwind",   "bg-teal-500/10 text-teal-400 border-teal-500/20"],
  ["supabase",   "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"],
  ["mongo",      "bg-green-500/10 text-green-400 border-green-500/20"],
  ["framer",     "bg-pink-500/10 text-pink-400 border-pink-500/20"],
  ["typescript", "bg-blue-500/10 text-blue-400 border-blue-500/20"],
  ["firebase",   "bg-orange-500/10 text-orange-400 border-orange-500/20"],
  ["zustand",    "bg-violet-500/10 text-violet-400 border-violet-500/20"],
];

function getTechClass(tech: string) {
  const t = tech.toLowerCase();
  for (const [key, cls] of TECH_COLORS) if (t.includes(key)) return cls;
  return "bg-muted text-muted-foreground border-border";
}

// ── Bento card ────────────────────────────────────────────────────────────────
function BentoCard({
  project,
  index,
  isBig = false,
}: {
  project: Project;
  index: number;
  isBig?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const catMeta = CATEGORY_META[project.category as CategoryId];
  const CatIcon = catMeta?.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${
        isBig ? "md:col-span-2" : ""
      }`}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-md">
            <Star size={10} fill="currentColor" /> Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className={`relative overflow-hidden bg-muted ${isBig ? "h-64 sm:h-80" : "h-48"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

        {/* Category badge */}
        {catMeta && CatIcon && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-background/75 backdrop-blur-sm border border-border text-muted-foreground">
              <CatIcon size={11} />
              {catMeta.label}
            </span>
          </div>
        )}

        {/* Hover visit pill */}
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -6 }}
          transition={{ duration: 0.18 }}
          className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={11} /> Visit site
        </motion.a>
      </div>

      {/* Body */}
      <div className={`p-5 ${isBig ? "sm:p-7" : ""}`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-bold leading-snug ${isBig ? "text-xl sm:text-2xl" : "text-lg"}`}>
            {project.title}
          </h3>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>

        <p className={`text-muted-foreground leading-relaxed mb-4 line-clamp-2 ${isBig ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, isBig ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-md text-xs font-medium border ${getTechClass(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isBig ? 5 : 3) && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium border bg-muted text-muted-foreground border-border">
              +{project.technologies.length - (isBig ? 5 : 3)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── List row card ─────────────────────────────────────────────────────────────
function ListCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const catMeta = CATEGORY_META[project.category as CategoryId];
  const CatIcon = catMeta?.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col sm:flex-row items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="relative shrink-0 w-full sm:w-36 h-24 rounded-lg overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
        />
      </div>

      <div className="flex-1 min-w-0">
        {catMeta && CatIcon && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
            <CatIcon size={10} /> {catMeta.label}
          </span>
        )}

        <h3 className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`px-1.5 py-0.5 rounded text-xs font-medium border ${getTechClass(tech)}`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 rounded text-xs border bg-muted text-muted-foreground border-border">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Live demo <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [active, setActive] = useState<CategoryId>("all");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(
    () => active === "all" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  const featuredProjects = useMemo(() => filtered.filter((p) => p.featured), [filtered]);
  const restProjects     = useMemo(() => filtered.filter((p) => !p.featured), [filtered]);

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.15em]">
              Portfolio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-5 text-balance leading-tight">
                Our <span className="text-gradient">Work</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
                {projects.length} projects shipped — from lightning-fast landing
                pages to complex multi-tenant platforms.
              </p>
            </div>

            <div className="flex items-center divide-x divide-border shrink-0">
              {[
                { value: String(projects.length),                              label: "Projects" },
                { value: String(projects.filter((p) => p.featured).length),   label: "Featured" },
                { value: "100%",                                               label: "Live"     },
              ].map((s) => (
                <div key={s.label} className="px-6 first:pl-0 last:pr-0 text-center">
                  <div className="text-3xl font-bold text-gradient leading-none mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {(Object.keys(CATEGORY_META) as CategoryId[]).map((id) => {
            const { label, icon: Icon } = CATEGORY_META[id];
            const isActive = active === id;
            const count = categoryCounts[id] ?? 0;
            if (id !== "all" && count === 0) return null;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon size={14} />
                {label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                    isActive
                      ? "bg-white/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 text-muted-foreground"
            >
              No projects in this category yet.
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured section */}
              {featuredProjects.length > 0 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Star size={14} className="text-primary" fill="currentColor" />
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-primary">
                      Featured Projects
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                    {featuredProjects.map((project, i) => (
                      <BentoCard
                        key={project.title}
                        project={project}
                        index={i}
                        isBig={i === 0}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Rest of projects */}
              {restProjects.length > 0 && (
                <>
                  <div className="flex items-center gap-4 my-12">
                    <span className="flex-1 h-px bg-border" />
                    <span className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground px-2">
                      More Projects
                    </span>
                    <span className="flex-1 h-px bg-border" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {restProjects.map((project, i) => (
                      <ListCard key={project.title} project={project} index={i} />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28 bg-gradient-to-r from-primary/10 via-background to-pink-500/10 border border-primary/20 rounded-2xl p-12 text-center"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">
            Let&apos;s collaborate
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            We build fast, we build clean. Tell us what you need and we&apos;ll make it real.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient rounded-full font-medium text-lg"
          >
            Start a project <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}