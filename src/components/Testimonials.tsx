import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHead } from "./Services";

const items = [
  {
    name: "Rahul Mehta",
    role: "Founder, MehtaTech",
    initials: "RM",
    text: "Deepak delivered our website in under 10 days and it looks better than agencies charging 10x. Truly impressed — our leads doubled in the first month.",
  },
  {
    name: "Priya Sharma",
    role: "Owner, Bloom Boutique",
    initials: "PS",
    text: "He understood my brand instantly and built an e-commerce store that my customers love. Communication was smooth and the results were beyond expectations.",
  },
  {
    name: "Arjun Verma",
    role: "Co-Founder, FitLife",
    initials: "AV",
    text: "Professional, fast, and creative. Our landing page conversions jumped from 1.2% to 4.6% after Deepak's redesign. Highly recommend!",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHead eyebrow="Testimonials" title="What Clients Say" />

        <div className="max-w-3xl mx-auto mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-10 md:p-12 text-center relative"
            >
              <Quote className="w-12 h-12 text-accent/30 mx-auto mb-4" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                "{items[idx].text}"
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent font-bold text-primary-foreground">
                  {items[idx].initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{items[idx].name}</div>
                  <div className="text-xs text-muted-foreground">{items[idx].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
