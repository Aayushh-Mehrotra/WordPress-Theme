import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-extrabold text-white tracking-tight hover:scale-105 transition"
        >
         Flow
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/signup" className="hover:text-white transition">SignUp</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link href="/contactus" className="hover:text-white transition">ContactUs</Link>
        </div>

        {/* 3D Button */}
        <a
          href="/signup"
          className="relative inline-flex items-center justify-center px-6 py-2 font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] active:translate-y-0"
        >
          Get Started
        </a>

      </nav>
    </header>
  );
};

export default Navbar;