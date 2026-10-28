import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  GitBranch,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/ui/portfolio/Footer";

import { projects } from "./projects/data";

import ProjectCard from "@/components/ui/portfolio/ProjectCard";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101310] text-zinc-100 selection:bg-lime-300 selection:text-black">
      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:min-h-[700px] lg:px-12"
      >
        <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-lime-400/[0.07] blur-[120px]" />

        <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.06] px-4 py-2">
              <span className="size-2 rounded-full bg-lime-400" />
              <span className="text-xs font-medium text-lime-300 sm:text-sm">
                OPEN TO DEVELOPER OPPORTUNITIES
              </span>
            </div>

            <p className="mb-4 text-lg text-zinc-400">Hello, I'm Al Amin 👋</p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              I build things
              <br />
              for the <span className="text-lime-400">web.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              An aspiring Full-Stack Developer passionate about building modern,
              responsive web applications, solving problems, and turning ideas
              into working products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
              >
                Explore My Work
                <ArrowDownRight className="ml-2 size-5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/5"
              >
                Contact Me
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="https://github.com/Al-aminCodes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-zinc-400 transition hover:text-lime-400"
              >
                <GitBranch className="size-5" />
              </Link>
              <span className="text-sm text-zinc-500">
                Building, learning, improving.
              </span>
            </div>
          </div>

          {/* Code-inspired visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#191D19] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-400" />
                  <span className="size-3 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  developer.ts
                </span>
                <Code2 className="size-4 text-zinc-500" />
              </div>

              <div className="space-y-4 overflow-x-auto p-6 font-mono text-sm leading-7">
                <p className="text-purple-400">const developer = {"{"}</p>
                <p className="whitespace-nowrap pl-4 text-zinc-300">
                  name: <span className="text-amber-300">"Al Amin"</span>,
                </p>
                <p className="whitespace-nowrap pl-4 text-zinc-300">
                  role:{" "}
                  <span className="text-amber-300">Full-Stack Developer</span>,
                </p>
                <p className="pl-4 text-zinc-300">interests: [</p>
                <p className="pl-8 text-lime-300">Web Development,</p>
                <p className="pl-8 text-lime-300">Problem Solving,</p>
                <p className="pl-8 text-lime-300">Learning New Tech,</p>
                <p className="pl-4 text-zinc-300">],</p>
                <p className="pl-4 text-zinc-300">
                  mindset:{" "}
                  <span className="text-amber-300">Keep improving</span>
                </p>
                <p className="text-purple-400">{"}"};</p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.07] px-5 py-4">
                <Sparkles className="size-5 text-lime-400" />
                <span className="text-sm text-zinc-400">
                  Turning ideas into applications
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/[0.06] bg-[#131613] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
              Selected work
            </p>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Projects I have built
              <span className="text-lime-400">.</span>
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              A collection of applications demonstrating my experience with
              frontend development, application state, API integration, and
              full-stack development.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            About me
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
            Curious mind.
            <br />
            <span className="text-lime-400">Builder's mindset.</span>
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-zinc-400">
          <p>
            I'm Al Amin, a developer who enjoys understanding how websites and
            software work behind the scenes.
          </p>
          <p>
            I enjoy breaking complex problems into smaller steps, building
            projects, and learning from debugging. Every project gives me a
            chance to improve my technical and problem-solving skills.
          </p>
          <p>
            My goal is to become a skilled Full-Stack Developer, contribute to
            real-world products, and keep learning alongside other developers.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/[0.06] bg-[#131613] px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            My toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I work with.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/[0.08] bg-[#191D19] px-5 py-3 text-sm text-zinc-300 transition hover:border-lime-400/40 hover:text-lime-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-lime-400/15 bg-[#171D16] px-6 py-14 text-center sm:px-12 sm:py-20">
          <MailIcon />

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Get in touch
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400">
            Interested in collaborating, discussing a project, or connecting
            with another developer? I'd love to hear from you.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aloneabs16@gmail.com&su=Portfolio%20Inquiry"
            className="mt-8 inline-flex items-center rounded-full bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
          >
            Say Hello
            <ArrowUpRight className="ml-2 size-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MailIcon() {
  return (
    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
      <Code2 className="size-6 text-lime-400" />
    </div>
  );
}
