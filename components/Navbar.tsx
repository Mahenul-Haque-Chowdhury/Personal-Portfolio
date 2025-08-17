"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/70 backdrop-blur supports-[backdrop-filter]:bg-[#050505]/50 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-[5%] py-4 md:py-5 flex items-center justify-between">
          <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-extrabold tracking-wide uppercase text-xl md:text-2xl">
            MAHENUL
          </Link>
          <button
            aria-label="Toggle Menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="md:hidden relative h-10 w-10 grid place-items-center"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => !o);
            }}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-2.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-5 h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-2.5 -rotate-45" : ""}`}
              />
            </div>
          </button>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          {[
            { href: "/works", label: "My Works" },
            { href: "/resume", label: "Resume" },
            { href: "/journey", label: "My Journey" },
            { href: "/contact", label: "Contact" },
          ].map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                    href={l.href}
                    className={`relative inline-block px-1 py-2 md:py-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 ${
                      active
                        ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500"
                        : ""
                    }`}
                    onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
      </nav>
      {/* Overlay */}
      <button
        aria-label="Close Menu"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed z-50 right-0 top-0 h-svh w-[78%] max-w-xs bg-[#0A0A0A] border-l border-white/10 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-extrabold tracking-wide uppercase">
            MAHENUL
          </Link>
          <button aria-label="Close Menu" onClick={() => setOpen(false)} className="h-10 w-10 grid place-items-center">
            <div className="relative h-5 w-6">
              <span className="absolute left-0 top-2.5 h-0.5 w-6 bg-white rotate-45" />
              <span className="absolute left-0 top-2.5 h-0.5 w-6 bg-white -rotate-45" />
            </div>
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-2">
          {[
            { href: "/works", label: "My Works" },
            { href: "/resume", label: "Resume" },
            { href: "/journey", label: "My Journey" },
            { href: "/contact", label: "Contact" },
          ].map((l, idx) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="overflow-hidden">
                <Link
                  href={l.href}
                  className={`block px-6 py-4 text-lg text-white/90 hover:bg-white/5 transition-colors ${
                    active ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500" : ""
                  }`}
                  style={{ transitionDelay: `${idx * 30}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
