import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHead } from "./Services";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      projectType: String(fd.get("projectType") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    setSending(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong");
      }
      form.reset();
      setSent(true);
      toast.success("Message sent! Deepak will get back to you within 24 hours.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSending(false);
    }
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="grid place-items-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-accent/40">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thanks for reaching out. I've received your message and will reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 px-5 py-2.5 rounded-xl font-medium border border-border hover:border-accent/40 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Name" name="name" required maxLength={100} />
                    <Field label="Email" name="email" type="email" required maxLength={255} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Phone" name="phone" maxLength={40} />
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Project Type</label>
                      <select
                        name="projectType"
                        required
                        defaultValue="Business Website"
                        className="w-full bg-background/40 border border-border rounded-xl px-4 py-3 focus:border-accent focus:outline-none transition-colors"
                      >
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
                      name="message"
                      required
                      rows={5}
                      maxLength={4000}
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
              )}
            </AnimatePresence>
          </motion.div>
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
