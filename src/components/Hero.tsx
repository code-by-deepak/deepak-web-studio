import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import laptop from "@/assets/hero-laptop.png";

const PHRASES = ["Websites.", "Brands.", "Businesses."];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = PHRASES[i];
    const speed = del ? 50 : 100;
    const t = setTimeout(() => {
      if (!del && text === cur) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % PHRASES.length);
        return;
      }
      setText(del ? cur.slice(0, text.length - 1) : cur.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <Particles count={50} />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-accent mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Available for new projects
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            I Build <br />
            <span className="text-gradient">{text}</span>
            <span className="inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse align-middle" />
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Helping small businesses & startups get a powerful online presence with fast, beautiful,
            conversion-focused websites.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground animate-[pulseGlow_3s_ease-in-out_infinite] hover:scale-[1.03] transition-transform"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-border glass hover:border-accent transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-border">
            {[
              { n: "10+", l: "Projects" },
              { n: "5+", l: "Clients" },
              { n: "3+", l: "Years" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary/30 to-accent/20 rounded-full" />
          <motion.img
            src={laptop}
            alt="Modern website built by Deepak"
            width={1280}
            height={960}
            className="relative w-full max-w-2xl mx-auto drop-shadow-[0_30px_60px_oklch(0.68_0.21_250/0.4)]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
