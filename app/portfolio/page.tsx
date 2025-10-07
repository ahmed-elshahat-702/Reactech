"use client"

import ProjectCard from "@/components/project-card"
import { motion } from "framer-motion"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory and seamless checkout experience.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and comprehensive reporting.",
      image: "/analytics-dashboard-dark-theme.png",
      tags: ["React", "D3.js", "Node.js"],
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with native performance and smooth animations.",
      image: "/mobile-app-interface.png",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      title: "Healthcare Portal",
      description: "HIPAA-compliant patient management system with telemedicine capabilities.",
      image: "/healthcare-medical-dashboard.jpg",
      tags: ["Next.js", "PostgreSQL", "WebRTC"],
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search and virtual tour features.",
      image: "/real-estate-property-listing.jpg",
      tags: ["React", "GraphQL", "Mapbox"],
    },
    {
      title: "Education LMS",
      description: "Learning management system with video streaming and progress tracking.",
      image: "/education-learning-platform.png",
      tags: ["Next.js", "MongoDB", "AWS"],
    },
  ]

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore our collection of successful projects across various industries and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
