import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4">

      <div className="w-full max-w-sm md:max-w-md max-h-[86vh] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-auto">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-5 text-sm md:text-base">
          Login to access your React-powered WordPress theme dashboard
        </p>

        {/* Form */}
        <form className="space-y-4">

          <div>
            <label className="block text-slate-300 mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between text-xs md:text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-white text-xs md:text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 md:py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white text-sm md:text-lg"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-slate-500 mt-4 text-xs">
          Free • Performance Optimized • Built with React
        </p>

      </div>
    </div>
  );
};

export default Login;