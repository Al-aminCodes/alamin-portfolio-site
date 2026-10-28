"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  GitBranch,
  Globe,
  Mail,
  MapPin,
  Code2,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "My Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  { label: "Wanderlust", href: "#projects" },
  { label: "Workout Challenger", href: "#projects" },
  { label: "Developer Stack", href: "#projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand and introduction */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-xl bg-lime-400 text-black">
                <Code2 size={22} />
              </span>

              <span className="text-xl font-bold tracking-tight">
                alamin<span className="text-lime-400">.dev</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              I'm Al Amin, a passionate developer focused on building modern,
              responsive, and user-friendly web applications. I enjoy learning
              new technologies, solving problems, and turning ideas into
              real-world projects.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={17} className="text-lime-400" />
              Bangladesh
            </div>

            <a
              href="mailto:aloneabs16@gmail.com?subject=Portfolio%20Inquiry"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
            >
              Let's work together
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-lime-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects and social links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Featured Projects
            </h3>

            <ul className="mt-5 space-y-4">
              {projects.map((project) => (
                <li key={project.label}>
                  <a
                    href={project.href}
                    className="text-sm text-gray-400 transition hover:text-lime-400"
                  >
                    {project.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
              Connect With Me
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/Al-aminCodes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <GitBranch size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-alamin313/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <Globe size={18} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aloneabs16@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 transition hover:text-lime-400"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Al Amin. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart size={14} className="fill-lime-400 text-lime-400" />
            <span className="text-gray-300">Next.js & Tailwind CSS</span>
          </p>

          <a href="#home" className="transition hover:text-lime-400">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
