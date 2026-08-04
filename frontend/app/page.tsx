import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Available for projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Halo, Saya </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Erlan
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Membangun antarmuka yang responsif dan interaktif. Berpengalaman
            melalui project nyata dan terus belajar teknologi terbaru.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Lihat Portofolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto border border-gray-700"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Cards Features */}
          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
              <span className="text-2xl text-indigo-400">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Membangun antarmuka web yang responsif dan interaktif menggunakan
              React, Next.js, dan Tailwind CSS.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
              <span className="text-2xl text-violet-400">⚙️</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Backend Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mengembangkan API dan server-side logic menggunakan Express.js dan
              mengelola database MySQL.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
              <span className="text-2xl text-purple-400">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mendesain pengalaman pengguna yang intuitif dan tampilan visual
              yang modern dan menarik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
