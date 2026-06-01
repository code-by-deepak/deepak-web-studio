import { motion } from "framer-motion";
import { Globe, ShoppingBag, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    desc: "Clean, fast, and mobile-friendly websites that turn visitors into customers for your business.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Store",
    desc: "Sell online with a beautiful, easy-to-manage store built for growth and conversions.",
  },
  {
    icon: Palette,
    title: "Landing Pages",
    desc: "High-converting pages designed to capture leads and turn visitors into paying customers.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHead eyebrow="Services" title="What I Offer" sub="End-to-end web solutions tailored to grow your business online." />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative glass rounded-2xl p-8 hover:border-accent/40 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_oklch(0.68_0.21_250/0.25)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-accent uppercase mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold">
        {title.split(" ").map((w, i, a) =>
          i === a.length - 1 ? <span key={i} className="text-gradient">{w}</span> : <span key={i}>{w} </span>
        )}
      </h2>
      {sub && <p className="text-muted-foreground mt-4">{sub}</p>}
    </motion.div>
  );
}
