export const metadata = { title: "Mahenul-Resume" };

export default function ResumePage() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <div>
      <section className="max-w-4xl mx-auto px-[6%] md:px-[8%] pt-28 pb-10" data-aos="fade-up">
        {/* Header Card */}
        <div className="relative overflow-hidden isolate rounded-2xl p-6 md:p-8 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur">
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none whitespace-nowrap">Mahenul Haque Chowdhury</h1>
          <div className="mt-2 text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Web Developer & Designer</div>

          <div className="mt-5 grid gap-3 text-white/80">
            <div className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-white/70" /> Dhaka, Bangladesh</div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-envelope text-white/70" /> mahenul.haque.chowdhury@g.bracu.ac.bd</div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-phone text-white/70" /> +880 123 456 789</div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-globe text-white/70" /> devarnob.netlify.app</div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="relative overflow-hidden isolate rounded-2xl p-6 md:p-8 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur mt-6">
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Professional Summary</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-600 to-pink-500 mt-2 mb-5" />
          <p className="text-white/85 leading-relaxed">
            Creative and detail‑oriented Web Developer & Designer with hands‑on experience building responsive, user‑friendly
            websites and applications. Strong foundation in Computer Science with expertise in modern web technologies.
            Adept at translating business requirements into elegant digital solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="relative overflow-hidden isolate rounded-2xl p-6 md:p-8 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur mt-6">
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Technical Skills</h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-indigo-600 to-pink-500 mt-2 mb-5" />
          <div className="flex gap-3 flex-wrap">
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm bg-[#0F0F0F] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="relative overflow-hidden isolate rounded-2xl p-6 md:p-8 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur mt-6" data-aos="fade-right">
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">Experience</h2>
          <div className="mt-4 space-y-2">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <div className="text-white/70">Jan 2024 - Present | Dhaka, Bangladesh</div>
            <p>
              Working on various projects
              <a href="/works" className="underline ml-1" rel="noopener">(View Projects)</a>
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="relative overflow-hidden isolate rounded-2xl p-6 md:p-8 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur mt-6" data-aos="fade-left">
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">Education</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">BSc in Computer Science</h3>
              <div className="text-white/70 my-1">BRAC University | 2021–2026</div>
              <p>CGPA: 3.01/4.0 (Running). Relevant Coursework: Data Structures, Algorithms, Web Development</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Higher Secondary Certificate (HSC)</h3>
              <div className="text-white/70 my-1">Ananda Mohan College | 2019</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Secondary School Certificate (SSC)</h3>
              <div className="text-white/70 my-1">Mymensingh Zilla School | 2017</div>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="text-center mt-8">
          <a
            href="/mahenul-resume.pdf"
            className="inline-block px-6 py-4 rounded bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold transition-transform duration-300 hover:-translate-y-2"
            download
            data-aos="zoom-in"
          >
            Download PDF →
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 text-center" data-aos="fade-up">
        <blockquote className="italic max-w-[700px] mx-auto">&quot;Create something today,even if it’s small,that your future self will thank you for&quot; - Arnob</blockquote>
      </section>
    </div>
  );
}
