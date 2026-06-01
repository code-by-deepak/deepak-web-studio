import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Wallet, LifeBuoy } from "lucide-react";
import { SectionHead } from "./Services";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years of Coding" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const features = [
  { icon: Rocket, title: "Fast Delivery", desc: "Most websites delivered in 7-14 days, no compromise on quality." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, startup-friendly pricing that scales with you." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Post-launch support, updates and maintenance — never alone." },
];

export function WhyMe() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHead eyebrow="Why Me" title="Built for Results" sub="Hands-on, dedicated, and obsessed with shipping work clients love." />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 shrink-0">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
