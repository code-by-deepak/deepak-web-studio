import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHead } from "./Services";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! I'll get back to you within 24 hours.");
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <SectionHead eyebrow="Contact" title="Let's Work Together" sub="Tell me about your project — I usually reply within a few hours." />

        <div className="grid lg:grid-cols-5 gap-8 mt-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <a href="tel:+917011875494" className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-accent/40 transition-colors">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call</div>
                <div className="font-semibold">+91 70118 75494</div>
              </div>
            </a>

            <a href="mailto:deepakwebstudio@gmail.com" className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-accent/40 transition-colors">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/30">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold">deepakwebstudio@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/917011875494"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl p-6 flex items-center justify-center gap-3 font-semibold bg-gradient-to-r from-[oklch(0.7_0.18_150)] to-[oklch(0.6_0.18_160)] text-white shadow-[0_0_30px_oklch(0.7_0.18_150/0.4)] hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8 grid gap-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" />
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Project Type</label>
                <select required className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors">
                  <option>Business Website</option>
                  <option>E-Commerce Store</option>
                  <option>Landing Page</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground animate-[pulseGlow_3s_ease-in-out_infinite] hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {sending ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}
