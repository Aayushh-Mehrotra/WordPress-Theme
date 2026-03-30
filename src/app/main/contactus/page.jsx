import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">

      <div className="w-full max-w-md md:max-w-lg max-h-[86vh] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-auto">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3">
          Contact Us
        </h1>

        <p className="text-slate-400 text-center mb-5 text-sm md:text-base">
          Questions about our free React-powered WordPress theme? We’d love to help.
        </p>

        {/* Form */}
        <form className="space-y-4">

          <div>
            <label className="block text-slate-300 mb-1 text-sm">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 text-sm">Message</label>
            <textarea
              rows="3"
              placeholder="Tell us how we can help..."
              className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 md:py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white text-sm md:text-lg"
          >
            Send Message
          </button>

        </form>

        {/* Footer note */}
        <p className="text-center text-slate-500 mt-4 text-xs">
          Free • Performance Optimized • Built with React
        </p>

      </div>
    </div>
  );
};

export default Contact;