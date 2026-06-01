import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { WhyMe } from "@/components/WhyMe";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroScreen } from "@/components/IntroScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepak Web Studio — Freelance Web Developer for Businesses" },
      { name: "description", content: "Deepak Singh builds fast, beautiful websites, e-commerce stores and high-converting landing pages for small businesses and startups." },
      { property: "og:title", content: "Deepak Web Studio — Freelance Web Developer" },
      { property: "og:description", content: "Helping small businesses & startups get a powerful online presence." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <IntroScreen />
      <CustomCursor />
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <div className="divider-gradient" />
        <Services />
        <div className="divider-gradient" />
        <Portfolio />
        <div className="divider-gradient" />
        <WhyMe />
        <div className="divider-gradient" />
        <Testimonials />
        <div className="divider-gradient" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
