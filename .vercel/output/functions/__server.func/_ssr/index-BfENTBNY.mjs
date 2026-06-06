import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { A as AnimatePresence, m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import { Z as Zap, X, M as Menu, S as Sparkles, A as ArrowRight, G as Globe, a as ShoppingBag, P as Palette, E as ExternalLink, R as Rocket, W as Wallet, L as LifeBuoy, Q as Quote, b as Star, c as Phone, d as Mail, e as MessageCircle, C as CircleCheck, f as Send, I as Instagram, g as Linkedin, h as Github } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass border-b border-border" : "py-5 bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Deepak ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Web Studio" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_30px_oklch(0.68_0.21_250/0.5)] hover:shadow-[0_0_50px_oklch(0.68_0.21_250/0.8)] transition-shadow",
              children: "Hire Me →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-foreground", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden glass border-t border-border mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "container mx-auto px-6 py-6 flex flex-col gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block text-foreground/80", children: l.label }) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 text-center px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground",
              children: "Hire Me →"
            }
          )
        ] }) })
      ]
    }
  );
}
function Particles({ count = 40 }) {
  const items2 = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 8,
      opacity: Math.random() * 0.5 + 0.2
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
    items2.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "particle",
        style: {
          width: p.size,
          height: p.size,
          left: `${p.left}%`,
          top: `${p.top}%`,
          opacity: p.opacity,
          animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`
        }
      },
      p.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl",
        style: { background: "radial-gradient(circle, oklch(0.55 0.22 255 / 0.35), transparent 70%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl",
        style: { background: "radial-gradient(circle, oklch(0.7 0.18 200 / 0.3), transparent 70%)" }
      }
    )
  ] });
}
const laptop = "data:image/png;base64,";
const PHRASES = ["Websites.", "Brands.", "Businesses."];
function Hero() {
  const [text, setText] = reactExports.useState("");
  const [i, setI] = reactExports.useState(0);
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 50 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-accent mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
              " Available for new projects"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6", children: [
              "I Build ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-1 h-[0.9em] bg-accent ml-1 animate-pulse align-middle" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mb-8", children: "Helping small businesses & startups get a powerful online presence with fast, beautiful, conversion-focused websites." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#portfolio",
                  className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground animate-[pulseGlow_3s_ease-in-out_infinite] hover:scale-[1.03] transition-transform",
                  children: [
                    "View My Work ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-border glass hover:border-accent transition-colors",
                  children: "Contact Me"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8 mt-12 pt-8 border-t border-border", children: [
              { n: "10+", l: "Projects" },
              { n: "5+", l: "Clients" },
              { n: "3+", l: "Years" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-gradient", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: s.l })
            ] }, s.l)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-3xl bg-gradient-to-br from-primary/30 to-accent/20 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                src: laptop,
                alt: "Modern website built by Deepak",
                width: 1280,
                height: 960,
                className: "relative w-full max-w-2xl mx-auto drop-shadow-[0_30px_60px_oklch(0.68_0.21_250/0.4)]",
                animate: { y: [0, -20, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const services = [
  {
    icon: Globe,
    title: "Business Website",
    desc: "Clean, fast, and mobile-friendly websites that turn visitors into customers for your business."
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Store",
    desc: "Sell online with a beautiful, easy-to-manage store built for growth and conversions."
  },
  {
    icon: Palette,
    title: "Landing Pages",
    desc: "High-converting pages designed to capture leads and turn visitors into paying customers."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Services", title: "What I Offer", sub: "End-to-end web solutions tailored to grow your business online." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-16", children: services.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: idx * 0.12 },
        className: "group relative glass rounded-2xl p-8 hover:border-accent/40 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_oklch(0.68_0.21_250/0.25)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-grid place-items-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-3", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all", children: [
              "Learn More ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
function SectionHead({ eyebrow, title, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "text-center max-w-2xl mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wider text-accent uppercase mb-4", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: title.split(" ").map(
          (w, i, a) => i === a.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: w }, i) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            w,
            " "
          ] }, i)
        ) }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4", children: sub })
      ]
    }
  );
}
const p1 = "data:image/jpeg;base64,";
const p2 = "data:image/jpeg;base64,";
const p3 = "data:image/jpeg;base64,";
const p4 = "data:image/jpeg;base64,";
const projects = [
  {
    img: p1,
    name: "Saffron & Smoke",
    tech: "React · Tailwind",
    cat: "Business Sites",
    url: "https://saffron-smoke-demo.vercel.app/",
    desc: "Premium Indian fusion restaurant website with menu, chef profiles, reservation system, and gallery. New Delhi."
  },
  {
    img: p2,
    name: "IronPeak Fitness",
    tech: "React · Tailwind",
    cat: "Business Sites",
    url: "https://ironpeak-fitness-showcase.vercel.app/",
    desc: "High-energy gym website with program listings, trainer profiles, membership pricing, and free trial booking. New Delhi."
  },
  {
    img: p3,
    name: "Velvet Bloom Studio",
    tech: "React · Tailwind",
    cat: "Business Sites",
    url: "https://radhika-salons-brown.vercel.app/",
    desc: "Luxury beauty salon website with service menu, stylist profiles, membership plans, and appointment booking. Mumbai."
  },
  {
    img: p4,
    name: "MediCare Plus",
    tech: "React · Tailwind",
    cat: "Business Sites",
    url: "https://medicare-plus-showcase.vercel.app/",
    desc: "Multi-specialty clinic website with doctor profiles, appointment booking, health packages, 8 specialities, and 24/7 emergency care. Bangalore."
  }
];
const filters = ["All", "Business Sites"];
function Portfolio() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "portfolio", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Portfolio", title: "My Recent Work", sub: "A snapshot of recent client projects across industries." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mt-10 mb-12", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(f),
        className: `px-5 py-2 rounded-full text-sm font-medium transition-all ${active === f ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_25px_oklch(0.68_0.21_250/0.5)]" : "glass text-muted-foreground hover:text-foreground"}`,
        children: f
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.4, delay: idx * 0.05 },
        className: "group relative rounded-2xl overflow-hidden glass",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: p.name,
              loading: "lazy",
              width: 1024,
              height: 768,
              className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: p.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground translate-y-4 group-hover:translate-y-0 transition-transform",
              children: [
                "View Project ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: p.tech })
          ] })
        ]
      },
      p.name
    )) }) })
  ] }) });
}
const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years of Coding" }
];
function Counter({ to, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
const features = [
  { icon: Rocket, title: "Fast Delivery", desc: "Most websites delivered in 7-14 days, no compromise on quality." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent, startup-friendly pricing that scales with you." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "Post-launch support, updates and maintenance — never alone." }
];
function WhyMe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Why Me", title: "Built for Results", sub: "Hands-on, dedicated, and obsessed with shipping work clients love." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "glass rounded-2xl p-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl font-bold text-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-2", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-16", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "flex gap-4 items-start",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-1", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.desc })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
const items = [
  {
    name: "Rahul Mehta",
    role: "Founder, MehtaTech",
    initials: "RM",
    text: "Deepak delivered our website in under 10 days and it looks better than agencies charging 10x. Truly impressed — our leads doubled in the first month."
  },
  {
    name: "Priya Sharma",
    role: "Owner, Bloom Boutique",
    initials: "PS",
    text: "He understood my brand instantly and built an e-commerce store that my customers love. Communication was smooth and the results were beyond expectations."
  },
  {
    name: "Arjun Verma",
    role: "Co-Founder, FitLife",
    initials: "AV",
    text: "Professional, fast, and creative. Our landing page conversions jumped from 1.2% to 4.6% after Deepak's redesign. Highly recommend!"
  }
];
function Testimonials() {
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Testimonials", title: "What Clients Say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto mt-16 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -30 },
          transition: { duration: 0.5 },
          className: "glass rounded-3xl p-10 md:p-12 text-center relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-12 h-12 text-accent/30 mx-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-6", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-accent text-accent" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl leading-relaxed text-foreground/90 italic", children: [
              '"',
              items[idx].text,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent font-bold text-primary-foreground", children: items[idx].initials }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: items[idx].name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: items[idx].role })
              ] })
            ] })
          ]
        },
        idx
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-8", children: items.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIdx(i),
          "aria-label": `Go to slide ${i + 1}`,
          className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-muted"}`
        },
        i
      )) })
    ] })
  ] }) });
}
const NAME_REGEX = /^[\p{L}\p{M}'’\-.\s]+$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+\d][\d\s\-().]{6,30}$/;
function validate(payload) {
  if (payload.name.length < 2) return "Please enter your full name";
  if (payload.name.length > 80) return "Name is too long";
  if (!NAME_REGEX.test(payload.name)) return "Name contains invalid characters";
  if (!EMAIL_REGEX.test(payload.email)) return "Please enter a valid email address";
  if (payload.email.length > 254) return "Email is too long";
  if (payload.phone && !PHONE_REGEX.test(payload.phone)) return "Please enter a valid phone number";
  if (payload.message.length < 10) return "Message should be at least 10 characters";
  if (payload.message.length > 4e3) return "Message is too long";
  return null;
}
function Contact() {
  const [sending, setSending] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const renderedAtRef = reactExports.useRef(Date.now());
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim().toLowerCase(),
      phone: String(fd.get("phone") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
      // honeypot
      renderedAt: renderedAtRef.current
    };
    const localError = validate(payload);
    if (localError) {
      toast.error(localError);
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong");
      }
      form.reset();
      renderedAtRef.current = Date.now();
      setSent(true);
      toast.success("Message sent! Deepak will get back to you within 24 hours.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Contact", title: "Let's Work Together", sub: "Tell me about your project — I usually reply within a few hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8 mt-16 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:col-span-2 flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917011875494", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:border-accent/40 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Call" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "+91 70118 75494" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:deepakwebstudio@gmail.com", className: "glass rounded-2xl p-6 flex items-center gap-4 hover:border-accent/40 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "deepakwebstudio@gmail.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://wa.me/917011875494",
                target: "_blank",
                rel: "noreferrer",
                className: "rounded-2xl p-6 flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-[oklch(0.7_0.18_150)] to-[oklch(0.6_0.18_160)] text-white shadow-[0_0_30px_oklch(0.7_0.18_150/0.4)] hover:scale-[1.02] transition-transform",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                  " Chat on WhatsApp"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              className: "flex flex-col items-center justify-center text-center py-12 gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Message Sent!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Thanks for reaching out. I've received your message and will reply within 24 hours." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      renderedAtRef.current = Date.now();
                      setSent(false);
                    },
                    className: "mt-2 px-5 py-2.5 rounded-xl font-medium border border-border hover:border-accent/40 transition-colors",
                    children: "Send another message"
                  }
                )
              ]
            },
            "success"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.form,
            {
              onSubmit,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "grid gap-4",
              noValidate: true,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": "true",
                    style: {
                      position: "absolute",
                      left: "-10000px",
                      top: "auto",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
                      "Website",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: "text",
                          name: "website",
                          tabIndex: -1,
                          autoComplete: "off"
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true, minLength: 2, maxLength: 80, autoComplete: "name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, maxLength: 254, autoComplete: "email" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", maxLength: 40, autoComplete: "tel", inputMode: "tel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Project Type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        name: "projectType",
                        required: true,
                        defaultValue: "Business Website",
                        className: "w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Business Website" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "E-Commerce Store" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Landing Page" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      name: "message",
                      required: true,
                      rows: 5,
                      minLength: 10,
                      maxLength: 4e3,
                      className: "w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors resize-none",
                      placeholder: "Tell me about your project..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: sending,
                    className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground animate-[pulseGlow_3s_ease-in-out_infinite] hover:scale-[1.02] transition-transform disabled:opacity-50",
                    children: sending ? "Sending..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Send Message ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                    ] })
                  }
                )
              ]
            },
            "form"
          ) })
        }
      )
    ] })
  ] }) });
}
function Field({ label, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ...props,
        className: "w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative pt-16 pb-8 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display font-bold text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5", strokeWidth: 2.5 }) }),
      "Deepak ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Web Studio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md", children: "Building digital experiences that grow your business." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
      { Icon: Instagram, href: "#" },
      { Icon: Linkedin, href: "#" },
      { Icon: Github, href: "#" },
      { Icon: MessageCircle, href: "https://wa.me/917011875494" }
    ].map(({ Icon, href }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noreferrer",
        className: "grid place-items-center w-10 h-10 rounded-full glass hover:border-accent hover:text-accent transition-colors",
        "aria-label": "Social link",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient w-full max-w-md" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "© 2025 Deepak Web Studio. All rights reserved." })
  ] }) }) });
}
function CustomCursor() {
  const dotRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0;
    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest("a,button,[role=button],input,textarea,select")) {
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1.6)");
      } else {
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    let raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dotRef, className: "cursor-dot" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ringRef, className: "cursor-ring" })
  ] });
}
function IntroScreen() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      exit: { opacity: 0, y: "-100%" },
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
      className: "fixed inset-0 z-[100] bg-background grid place-items-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8 },
          className: "font-display text-4xl md:text-6xl font-bold text-center",
          children: [
            "Deepak ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Web Studio" })
          ]
        }
      )
    }
  ) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(IntroScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyMe, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-gradient" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Home as component
};
