import { Zap, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <Zap className="w-5 h-5" strokeWidth={2.5} />
            </span>
            Deepak <span className="text-gradient">Web Studio</span>
          </a>
          <p className="text-muted-foreground max-w-md">
            Building digital experiences that grow your business.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Github, href: "#" },
              { Icon: MessageCircle, href: "https://wa.me/917011875494" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-full glass hover:border-accent hover:text-accent transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="divider-gradient w-full max-w-md" />
          <p className="text-xs text-muted-foreground">
            © 2025 Deepak Web Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
