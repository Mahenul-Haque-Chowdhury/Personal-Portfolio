import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      {/* Hero */}
  <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-[5%]">
        <div className="text-center max-w-3xl mx-auto px-5" data-aos="fade-up">
          <div className="mx-auto mb-8 md:mb-10 w-[160px] h-[160px] md:w-[210px] md:h-[210px] rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-indigo-600 to-pink-500 p-[3px] shadow-[0_15px_50px_rgba(79,70,229,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image src="/images/myprofile.jpg" alt="Mahenul Haque Chowdhury" width={200} height={200} className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mt-2 md:mt-4 mb-3 md:mb-4 leading-none whitespace-nowrap text-center">
  Mahenul Haque Chowdhury
</h1>
          <p className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-pink-400 mb-5">Web Developer & Designer</p>
          <p className="text-white/80 mb-6">BRAC University CSE &#39;25</p>
          <p className="max-w-2xl mx-auto mb-10 text-white/90">Building pixel-perfect experiences with modern tech stacks.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/works" className="text-white inline-block px-7 py-4 rounded bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(79,70,229,0.35)]">
              View Projects →
            </Link>
            <Link href="/resume" className="text-white inline-block px-7 py-4 rounded bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(236,72,153,0.35)]">
              About me →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="max-w-7xl mx-auto px-[5%] py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text" data-aos="fade-right">Featured Works</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Trendology.page- E-commerce site",
              tech: "Next.js | Tailwind CSS | TypeScript",
              desc: "A modern platform with a clean design and user‑friendly experience.",
              href: "https://trendology.page/",
            },
            {
              title: "arnob.life – Personal Portfolio",
              tech: "Next.js | Tailwind CSS | TypeScript",
              desc: "My personal portfolio with a modern aesthetic, smooth animations, and clear navigation.",
              href: "https://arnob.life/",
            },
            {
              title: "Course Logistics Platform",
              tech: "HTML | CSS | JavaScript",
              desc: "Developed a Information website with contact usability and work details",
              href: "https://courselogistics.net",
            },
            {
              title: "AetherCore Dynamics",
              tech: "HTML | CSS | JavaScript",
              desc: "Modern portfolio showcasing cutting-edge web development techniques and responsive design",
              href: "https://aethercoredynamics.netlify.app/",
            },
          ].map((p) => (
            <div key={p.title} className="relative overflow-hidden isolate rounded-xl p-6 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur" data-aos="zoom-in">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
              <div className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">{p.tech}</div>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-white/80">{p.desc}</p>
              <div className="mt-6">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 border border-white/20 px-3 py-2 rounded inline-block hover:bg-white/5 transition">
                  Visit Site
                </a>
              </div>
              <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold shadow-[0_6px_20px_rgba(236,72,153,0.35)]">Featured</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-6xl mx-auto px-5 py-16 text-center" data-aos="fade-up">
        <blockquote className="italic max-w-[700px] mx-auto">&quot;Create something today,even if it’s small,that your future self will thank you for&quot; - Arnob</blockquote>
      </section>

  {/* Tech Stack */}
  <TechStack />
    </div>
  );
}
