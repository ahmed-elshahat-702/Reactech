"use client";

import AnimatedHeroSection from "@/components/animated-hero-section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/consts";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Shield, Users, Rocket } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with React, Next.js, and modern technologies.",
    },
    {
      icon: Palette,
      title: "Logo/Identity Design",
      description: "Logo, Branding, and Identity Design",
    },
    {
      icon: Zap,
      title: "Performance / SEO",
      description:
        "Lightning-fast websites optimized for speed and user experience. SEO Optimization.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description:
        "Your data and users are protected with industry-leading security practices.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned developers specializing in the React and Next.js ecosystem.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Agile development process ensuring timely project completion.",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHeroSection />

      {/* Services Overview */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Comprehensive web development solutions tailored to your business
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient rounded-full  transition-colors font-medium"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Why Choose <span className="text-gradient">Reactech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We combine speed, quality, and expertise to deliver exceptional
              results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Showcasing our best work and successful client partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient rounded-full transition-colors font-medium"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-background to-pink-500/10 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Let&apos;s build something amazing together. Get in touch with our
              team today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient  rounded-full transition-colors font-medium text-lg"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
