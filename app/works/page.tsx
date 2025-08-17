export const metadata = { title: "Mahenul-Projects" };

import TechStack from "@/components/TechStack";

export default function WorksPage() {
  const projects = [
    {
      title: "Course Logistics Platform",
      tech: "HTML | CSS | Javascript",
      desc:
        "Developed a full-stack course management system for educational institutions with real-time analytics.",
      href: "https://courselogistics.net",
    },
    {
      title: "AetherCore Dynamics",
      tech: "HTML | CSS | JavaScript | React",
      desc:
        "Modern portfolio with animated components and responsive layouts built using modern web technologies",
      href: "https://aethercoredynamics.netlify.app/",
    },
    {
      title: "Personal Portfolio Website with Admin Panel",
      tech: "HTML | CSS | JavaScript",
      desc:
        "Designed and developed a responsive portfolio website to showcase projects and professional skills with modern animations.",
      href: "https://devarnob.netlify.app/",
    },
    {
      title: "Aamar Dokan – Ecommerce",
      tech: "Next.js | Tailwind CSS | TypeScript",
      desc: "An ecommerce site with a modern design and a user‑friendly shopping experience.",
      href: "https://aamar-dokan.vercel.app/",
    },
    {
      title: "Zero Nine Holdings – Business Website",
      tech: "HTML | CSS | JavaScript",
      desc:
        "Corporate website for Zero Nine Holdings showcasing services and brand presence.",
      href: "https://zeronineholdings.netlify.app/",
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-[5%] py-28">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 gradient-text" data-aos="fade-right">
          My Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="relative overflow-hidden isolate rounded-xl p-6 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur"
              data-aos="zoom-in"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
              <div className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">
                {p.tech}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/80">{p.desc}</p>
              <div className="mt-6">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 border border-white/20 px-3 py-2 rounded inline-block hover:bg-white/5 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-5 py-16 text-center" data-aos="fade-up">
        <blockquote className="italic max-w-[700px] mx-auto">&quot;Create something today,even if it’s small,that your future self will thank you for&quot; - Arnob</blockquote>
      </section>
  <TechStack />
    </div>
  );
}
