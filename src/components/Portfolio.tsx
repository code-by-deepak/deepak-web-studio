import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHead } from "./Services";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Cat = "All" | "Business Sites" | "Landing Pages" | "E-Commerce";

const projects: { img: string; name: string; tech: string; cat: Exclude<Cat, "All"> }[] = [
  { img: p1, name: "ConsultPro", tech: "React · Tailwind", cat: "Business Sites" },
  { img: p2, name: "Carcoity Store", tech: "Next.js · Stripe", cat: "E-Commerce" },
  { img: p3, name: "Saxun Ventures", tech: "React · Framer", cat: "Landing Pages" },
  { img: p4, name: "Restaurante Lume", tech: "HTML · CSS · JS", cat: "Business Sites" },
  { img: p5, name: "Cuvee Fashion", tech: "Shopify · React", cat: "E-Commerce" },
  { img: p6, name: "NeveCrate App", tech: "React · Tailwind", cat: "Landing Pages" },
];

const filters: Cat[] = ["All", "Business Sites", "Landing Pages", "E-Commerce"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHead eyebrow="Portfolio" title="My Recent Work" sub="A snapshot of recent client projects across industries." />

        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_25px_oklch(0.68_0.21_250/0.5)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.tech}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
