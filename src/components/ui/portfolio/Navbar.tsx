"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#101310]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-bold tracking-tight"
        >
          alamin<span className="text-lime-400">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-lime-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-4 py-2 font-semibold text-black transition hover:bg-lime-300"
          >
            Let&apos;s Talk
            <ArrowUpRight className="ml-1 size-4" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-white/10 p-2 text-zinc-200 hover:bg-white/5 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-[#101310] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-lime-400"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-lime-400"
            >
              Contact me ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
