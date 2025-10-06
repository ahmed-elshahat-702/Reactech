"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, image, tags, link = "#" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden"
    >
      <Link href={link} className="block">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
    </motion.div>
  )
}
