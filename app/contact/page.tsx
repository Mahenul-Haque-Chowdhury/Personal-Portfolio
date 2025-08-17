export const metadata = { title: "Contact Mahenul" };

export default function ContactPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-[8%] py-28">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-6">Let&#39;s Build Something Amazing</h1>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 mt-10">
            <div className="relative overflow-hidden isolate rounded-xl p-6 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur" data-aos="fade-right">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">📍 Location</h3>
                  <p>Dhaka, Bangladesh</p>
                </div>
                <div>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">📧 Email</h3>
                  <p>mahenul.haque.chowdhury@g.bracu.ac.bd</p>
                </div>
                <div>
                  <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-2">🔗 Social</h3>
                  <div className="flex items-center gap-6 mt-4">
                    {[
                      { href: "https://www.facebook.com/MahenulHaqueChowdhuryArnob", icon: "fab fa-facebook" },
                      { href: "https://www.instagram.com/mahenul_haque_chowdhury", icon: "fab fa-instagram" },
                      { href: "https://linkedin.com/in/mahenul", icon: "fab fa-linkedin" },
                      { href: "https://x.com/Mahenul_Arnob69", icon: "fab fa-twitter" },
                    ].map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600">
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form
              className="relative overflow-hidden isolate rounded-xl p-6 border border-white/10 bg-[#0E0E0E]/60 backdrop-blur"
              action="https://formspree.io/f/xgvadbbp"
              method="POST"
              data-aos="fade-left"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-pink-500/20" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 my-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded text-white min-h-[44px] outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 my-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded text-white min-h-[44px] outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <textarea
                name="message"
                placeholder="Describe your project..."
                rows={6}
                required
                className="w-full p-4 my-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded text-white outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                type="submit"
                className="w-full md:w-1/2 block mx-auto mt-6 text-white px-6 py-4 rounded bg-gradient-to-r from-indigo-600 to-pink-500 font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 text-center" data-aos="fade-up">
        <blockquote className="italic max-w-[700px] mx-auto">&quot;Create something today,even if it’s small,that your future self will thank you for&quot; - Arnob</blockquote>
      </section>
    </div>
  );
}
