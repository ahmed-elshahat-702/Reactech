"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  // Zod schema for form validation
  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(50, "Name must be 50 characters or less"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    message: z
      .string()
      .min(1, "Message is required")
      .max(500, "Message must be 500 characters or less"),
  });

  // Type derived from Zod schema
  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          time: new Date().toLocaleString(),
          message: data.message,
          title: "New Contact Form Submission",
          email: data.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast("Email sent successfully!", {
        icon: <CheckCircle className="w-4 h-4" />,
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast("Email failed to send.", {
        icon: <XCircle className="w-4 h-4" />,
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "reactech.eg@gmail.com",
      link: "mailto:reactech.eg@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+201027927418",
      link: "tel:+201027927418",
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
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                  disabled={isSubmitting}
                  autoComplete="off"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  disabled={isSubmitting}
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  disabled={isSubmitting}
                  autoComplete="off"
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <Send size={18} />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <p className="text-muted-foreground leading-relaxed">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
