"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  ClipboardList,
  Rocket,
  Handshake,
} from "lucide-react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const WHATSAPP_NUMBER = "201027927418";

const PROJECT_TYPES = [
  "Restaurant website",
  "Hotel booking website",
  "Patisserie / bakery website",
  "E-commerce store",
  "Platform / SaaS",
  "Dashboard / CRM",
  "Landing page",
  "Logo & identity design",
  "Other",
];

const BUDGET_RANGES = [
  "Under 5,000 EGP",
  "5,000 – 15,000 EGP",
  "15,000 – 30,000 EGP",
  "30,000 – 60,000 EGP",
  "60,000 EGP+",
  "Not sure yet",
];

const steps = [
  {
    icon: ClipboardList,
    title: "We review your message",
    description: "We read every message carefully and understand your business needs.",
  },
  {
    icon: MessageCircle,
    title: "We reply on WhatsApp",
    description: "We'll reply directly on WhatsApp — usually within minutes.",
  },
  {
    icon: Handshake,
    title: "Free consultation",
    description: "A quick chat to align on scope, timeline, and budget.",
  },
  {
    icon: Rocket,
    title: "We start building",
    description: "Once aligned, we kick off and keep you updated throughout.",
  },
];

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be 50 characters or less"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number too long"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be 1000 characters or less"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Build a nicely formatted WhatsApp message from the form data
    const text = [
      `👋 *New Project Enquiry*`,
      ``,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Project type:* ${data.projectType}`,
      data.budget ? `*Budget:* ${data.budget}` : null,
      ``,
      `*Message:*`,
      data.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Small delay so the user sees the button state change before redirect
    await new Promise((r) => setTimeout(r, 300));

    window.open(url, "_blank");
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-60";

  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
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
            Fill in the details below and we&apos;ll open WhatsApp with everything ready — no back-and-forth needed.
          </p>
        </motion.div>

        {/* Quick WhatsApp shortcut — for people who don't want the form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Reactech! I'm interested in building a website for my business. Can we discuss?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border-2 border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 transition-all duration-300"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg" style={{ color: "#25D366" }}>
                Chat directly on WhatsApp
              </div>
              <div className="text-muted-foreground text-sm mt-0.5">
                Skip the form — tap here to message us directly right now.
              </div>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg">→</span>
          </a>

          <div className="flex items-center gap-4 my-6">
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider px-2">
              or fill in the form below
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Explainer banner */}
            <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-[#25D366]/8 border border-[#25D366]/20">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" className="shrink-0 mt-0.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When you hit <strong className="text-foreground">Send</strong>, WhatsApp will open with your details pre-filled — just press send inside WhatsApp and we&apos;ll reply shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={inputClass}
                  placeholder="Ahmed Hassan"
                  disabled={isSubmitting}
                  autoComplete="off"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Your WhatsApp number
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className={inputClass}
                  placeholder="+20 100 000 0000"
                  disabled={isSubmitting}
                  autoComplete="off"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Project type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  What are you looking to build?
                </label>
                <select
                  id="projectType"
                  {...register("projectType")}
                  disabled={isSubmitting}
                  className={inputClass}
                >
                  <option value="">Select project type…</option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Approximate budget{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <select
                  id="budget"
                  {...register("budget")}
                  disabled={isSubmitting}
                  className={inputClass}
                >
                  <option value="">Select a range…</option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  disabled={isSubmitting}
                  autoComplete="off"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your business, what you need, and any specific requirements…"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium text-white transition-all"
                style={{ backgroundColor: "#25D366" }}
              >
                {isSubmitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.button>

            </form>
          </motion.div>

          {/* ── Right side ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact info */}
            <div className="bg-card border border-border rounded-xl p-7">
              <h2 className="text-xl font-bold mb-5">Contact Information</h2>
              <div className="space-y-4">
                <Link href="mailto:reactech.eg@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">
                      reactech.eg@gmail.com
                    </div>
                  </div>
                </Link>

                <Link href="tel:+201027927418" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                    <div className="font-medium text-sm group-hover:text-primary transition-colors">
                      +201027927418
                    </div>
                  </div>
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#25D36620" }}
                  >
                    <MessageCircle size={18} style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">WhatsApp</div>
                    <div className="font-medium text-sm" style={{ color: "#25D366" }}>
                      Chat now — fastest response
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-card border border-border rounded-xl p-7">
              <h3 className="text-xl font-bold mb-5">What happens next?</h3>
              <div className="space-y-5">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon size={15} className="text-primary" />
                      </div>
                      {i < steps.length - 1 && <div className="w-px h-5 bg-border" />}
                    </div>
                    <div className="pb-1">
                      <div className="font-semibold text-sm mb-0.5">{step.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Response time:</span> We typically reply on WhatsApp within minutes during business hours.
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}