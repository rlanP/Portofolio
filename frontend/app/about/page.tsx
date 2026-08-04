export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Lebih dekat dengan saya, perjalanan belajar, dan apa yang saya
          lakukan.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="w-full md:w-1/3">
          <div className="w-full aspect-square rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden relative">
            <img
              src="profile.jpeg"
              alt="Erlan"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-500"></div>
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Halo! Saya Erlan
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Saya adalah siswa Rekayasa Perangkat Lunak (RPL) yang memiliki
            passion besar di bidang web development. Saya senang menerjemahkan
            ide menjadi aplikasi web yang fungsional, interaktif, dan memiliki
            nilai guna.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Perjalanan saya di dunia programming dimulai sejak bangku SMK.
            Ketika pertama kali belajar ngoding, saya langsung tertarik. Terus
            mengasah keahlian dengan berbagai teknologi seperti JavaScript,
            React, Next.js, hingga backend dengan Node.js dan database MySQL.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800/50">
            <div>
              <span className="block text-sm text-gray-500 mb-1">Nama</span>
              <span className="text-white font-medium">Erlan Yusuf Rafif</span>
            </div>
            <div>
              <span className="block text-sm text-gray-500 mb-1">Lokasi</span>
              <span className="text-white font-medium">Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Pendidikan */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          Pendidikan
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-500/30 space-y-8">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-900 border-4 border-indigo-500"></div>
              <span className="text-sm text-indigo-400 font-medium">
                2024 - Sekarang
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                SMK Telkom Makassar (Jurusan RPL)
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Mempelajari pemrograman web, mobile, dan database. Fokus pada
                pengembangan fullstack web application.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-900 border-4 border-gray-600"></div>
              <span className="text-sm text-gray-500 font-medium">
                2021 - 2024
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                SMPIT Ikhtiar Makassar
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Masa SMP dimana mulai tertarik dengan dunia teknologi dan
                komputer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
