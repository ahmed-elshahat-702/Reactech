"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demo,
  github,
}: ProjectCardProps) {
  // Determine the primary link (demo or github)
  const primaryLink = demo || github || "#";
  // Clean up image URL by removing query parameters for Next/Image src
  const cleanImageSrc = image.split("?")[0];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden"
    >
      {/* 3. Use the determined primaryLink */}
      <Link
        href={primaryLink}
        target={primaryLink !== "#" ? "_blank" : "_self"}
        className="block"
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          {/* 4. Use the cleaned image source */}
          <Image
            src={cleanImageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex space-x-2">
              {/* Optional: Add a Github link/icon if available */}
              {github && github !== "#" && (
                <Link
                  href={github}
                  target="_blank"
                  className="p-1 rounded-full hover:bg-muted-foreground/10 transition-colors"
                  onClick={(e) => e.stopPropagation()} // Prevent card link from activating
                >
                  <Github
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </Link>
              )}
              {/* External Link Icon for demo/primary link */}
              <ExternalLink
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>

          {/* Tags (now 'technologies') */}
          <div className="flex flex-wrap gap-2">
            {/* 5. Use 'technologies' instead of 'tags' */}
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
    </motion.div>
  );
}
