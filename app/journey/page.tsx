export const metadata = { title: "My Journey" };

export default function JourneyPage() {
  const items = [
    {
      range: "2023 - Present",
      title: "Web Developer & Designer",
      desc:
        "Working on front-end development, UI/UX design, and responsive websites for various clients.",
    },
    {
      range: "2021 - 2023",
      title: "Freelance Projects",
      desc:
        "Delivered multiple custom websites, e-commerce platforms, and brand designs for international clients.",
    },
    {
      range: "2019 - 2021",
      title: "Learning & Skill Development",
      desc:
        "Focused on mastering HTML, CSS, JavaScript, and popular frameworks like React.",
    },
  ];

  return (
    <div>
      <section className="px-[6%] md:px-[8%] pt-28 pb-6" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">MY JOURNEY</h1>
        <p className="text-center text-white/80">Explore my growth, milestones, and the path that defines me.</p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-[6%] md:px-0 pb-14">
        <div className="relative mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-fuchsia-600 to-pink-500 rounded-full" />

          <div className="space-y-8">
            {items.map((t, idx) => (
              <div key={t.title} className="relative pl-12" data-aos="fade-up" data-aos-delay={idx * 60}>
                {/* Node */}
                <span className="absolute left-[10px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 ring-4 ring-[#0A0A0A]" />

                {/* Card */}
                <div className="relative isolate overflow-hidden rounded-2xl p-5 md:p-6 bg-gradient-to-br from-[#121212] to-[#0c0c0c] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="absolute -z-10 -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600/20 to-pink-500/20" />
                  <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">{t.range}</div>
                  <h3 className="text-xl md:text-2xl font-bold mt-1">{t.title}</h3>
                  <p className="text-white/80 mt-2">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery under timeline */}
      <section className="pt-2 pb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">My Gallery</h2>
        <div className="max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 px-[5%]">
          {[
            { src: "/images/gallery1.jpg", alt: "Music", caption: "Live Performance" },
            { src: "/images/gallery2.jpg", alt: "Coding", caption: "Development Session" },
            { src: "/images/gallery3.jpg", alt: "Nature", caption: "Outdoor Adventure" },
            { src: "/images/gallery4.jpg", alt: "Setup", caption: "Workstation Setup" },
            { src: "/images/gallery5.jpg", alt: "Travel", caption: "Cox&#39;s Bazar" },
            { src: "/images/gallery6.jpg", alt: "Travel", caption: "Travel" },
          ].map((g) => (
            <div key={g.src} className="relative overflow-hidden rounded-xl aspect-square group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-3 text-center">
                {g.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 text-center" data-aos="fade-up">
        <blockquote className="italic max-w-[700px] mx-auto">&quot;Create something today,even if it’s small,that your future self will thank you for&quot; - Arnob</blockquote>
      </section>
    </div>
  );
}
