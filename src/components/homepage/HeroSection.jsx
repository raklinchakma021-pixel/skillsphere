"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-black overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Upgrade Your Skills Today 🚀
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-lg md:text-xl text-white/90">
          Learn from Industry Experts and build real-world projects with hands-on experience.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Explore Courses
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
}