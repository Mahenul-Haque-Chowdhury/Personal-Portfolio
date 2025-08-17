export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="max-w-6xl mx-auto px-[8%] text-center w-full py-8">
        <div className="flex justify-center items-center gap-12 py-4">
          {[
            { href: "https://www.facebook.com/MahenulHaqueChowdhuryArnob", icon: "fab fa-facebook" },
            { href: "https://www.instagram.com/mahenul_haque_chowdhury", icon: "fab fa-instagram" },
            { href: "https://linkedin.com/in/mahenul", icon: "fab fa-linkedin" },
            { href: "https://www.youtube.com/@ArnobPlaysMusic", icon: "fab fa-youtube" },
            { href: "https://www.twitch.tv/mrdespicable__", icon: "fab fa-twitch" },
            { href: "https://x.com/Mahenul_Arnob69", icon: "fab fa-twitter" },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 text-xl hover:from-pink-500 hover:to-indigo-600">
              <i className={s.icon} />
            </a>
          ))}
        </div>
        <p className="mt-4 opacity-70 text-sm">&copy; 2025 Mahenul Haque Chowdhury. All rights reserved.</p>
      </div>
    </footer>
  );
}
