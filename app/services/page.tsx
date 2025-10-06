"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  Search,
  ShoppingCart,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with React, Next.js, and cutting-edge technologies. We create scalable, performant solutions tailored to your business needs.",
      features: [
        "React & Next.js Development",
        "Full-Stack Solutions",
        "API Integration",
        "Database Design",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love. We combine aesthetics with functionality to create memorable digital experiences.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design Systems",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional performance and user experience on iOS and Android.",
      features: [
        "React Native Apps",
        "iOS & Android Development",
        "App Store Deployment",
        "Mobile UI/UX",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions. We help you leverage the power of modern cloud platforms.",
      features: [
        "AWS & Vercel Deployment",
        "CI/CD Pipelines",
        "Cloud Architecture",
        "Performance Optimization",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic. We implement best practices for technical SEO and performance.",
      features: [
        "Technical SEO",
        "Performance Optimization",
        "Meta Tags & Schema",
        "Analytics Setup",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment processing, inventory management, and seamless checkout experiences.",
      features: [
        "Stripe Integration",
        "Shopping Cart Systems",
        "Inventory Management",
        "Order Processing",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites that convert. We optimize every aspect of your application for speed and efficiency.",
      features: [
        "Core Web Vitals",
        "Code Splitting",
        "Image Optimization",
        "Caching Strategies",
      ],
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description:
        "Keep your applications secure and up-to-date. We provide ongoing maintenance and security updates.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Bug Fixes",
        "24/7 Monitoring",
      ],
    },
  ];

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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive web development solutions designed to help your
            business thrive in the digital world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Let&apos;s discuss your project and find the perfect solution for
            your needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
