"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "201027927418";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Reactech! I'm interested in building a website for my business. Can we discuss?"
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show tooltip after 4 seconds automatically
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Auto-hide tooltip after 6 seconds
  useEffect(() => {
    if (!showTooltip) return;
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-card border border-border rounded-xl px-4 py-3 shadow-lg max-w-[220px] text-right"
          >
            <button
              onClick={() => { setShowTooltip(false); setDismissed(true); }}
              className="absolute top-2 left-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
            <p className="text-sm font-medium text-foreground leading-snug">
              Chat with us on WhatsApp
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              We reply within minutes!
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-5 w-3 h-3 bg-card border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => !dismissed && setTimeout(() => setShowTooltip(false), 1500)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "#25D366", opacity: 0.3 }}
        />
        <MessageCircle className="text-white" size={26} fill="white" strokeWidth={1.5} />
      </motion.a>
    </div>
  );
}