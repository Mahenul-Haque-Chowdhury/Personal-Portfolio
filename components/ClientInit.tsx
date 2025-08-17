"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

declare global {
  interface Window {
    particlesJS?: (id: string, config: unknown) => void;
  }
}

export default function ClientInit() {
  useEffect(() => {
    AOS.init({ duration: 800 });

    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#4F46E5" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return null;
}
