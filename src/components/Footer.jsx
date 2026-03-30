import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">React WP Theme</h3>
          <p className="mt-4 text-white/60 text-sm">
            A modern WordPress theme built with React. Free to use,
            developer friendly, and optimized for high performance.
          </p>
        </div>

        {/* Documentation */}
        <div>
          <h4 className="font-semibold mb-4">Documentation</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-white">Getting Started</a></li>
            <li><a href="#" className="hover:text-white">Installation Guide</a></li>
            <li><a href="#" className="hover:text-white">Configuration</a></li>
            <li><a href="#" className="hover:text-white">Customization</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-white">Changelog</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">GitHub Repo</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About Theme</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Performance</a></li>
            <li><a href="#" className="hover:text-white">License (Free)</a></li>
            <li><a href="#" className="hover:text-white">Release Notes</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} React WP Theme — Free & Performance Optimized
      </div>
    </footer>
  );
};

export default Footer;