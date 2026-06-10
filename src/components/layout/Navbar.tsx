"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // Page routes
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    // Section routes
    const id = href.replace("#", "");

    if (window.location.pathname !== "/") {
      router.push("/");

      setTimeout(() => {
        scrollToSection(id);
      }, 150);
    } else {
      scrollToSection(id);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "#courses" },
    { name: "Results", href: "/results" },
    { name: "About", href: "/about" },
    { name: "Locations", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        scrolled
          ? "bg-[#2e358d]/95 backdrop-blur-lg border-b border-white/10 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex z-[110] group">
          <div className="flex items-center gap-3.5 bg-white p-1.5 px-3 md:px-4 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
              <Image src="/logo.avif" alt="Logo" fill className="object-contain" priority />
            </div>

            <div className="h-5 md:h-6 w-[1px] bg-slate-200 shrink-0" />

            <div className="relative h-5 md:h-6 aspect-[1080/450] shrink-0">
              <Image src="/names.avif" alt="Name" fill className="object-contain" priority />
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-white/90 text-sm font-semibold uppercase tracking-widest hover:text-cta transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <a href="#contact">
            <Button className="py-2.5 px-8 bg-cta border-none hover:bg-[#c93536] text-white shadow-md font-bold">
              Enquire Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-8 h-6 flex flex-col justify-between">
            <span className={cn("w-full h-0.5 bg-white transition-all", isOpen && "rotate-45 translate-y-2.5")} />
            <span className={cn("w-full h-0.5 bg-white transition-all", isOpen && "opacity-0")} />
            <span className={cn("w-full h-0.5 bg-white transition-all", isOpen && "-rotate-45 -translate-y-2.5")} />
          </div>
        </button>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 h-screen w-screen bg-[#2e358d] z-[105] md:hidden flex flex-col items-center justify-center space-y-8 transition-all",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link, idx) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className="text-3xl font-display font-bold text-white hover:text-cta transition-colors"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {link.name}
          </button>
        ))}

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          <Button className="bg-cta px-12 py-5 text-xl font-bold">
            Enquire Now
          </Button>
        </a>
      </div>
    </nav>
  );
};