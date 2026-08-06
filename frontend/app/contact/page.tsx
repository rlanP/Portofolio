export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk
          menghubungi saya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Masukkan nama anda"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="contoh@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Tulis pesan anda di sini..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="space-y-8">
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Informasi Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-medium">Alamat</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    Makassar, Sulawesi Selatan, Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    rafifnihud@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-indigo-400 shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-medium">Nomor Telepon</h4>
                  <p className="text-gray-400 text-sm mt-1">
                    +62 823-9682-8594
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href={
                    {
                      GitHub: "https://github.com/rlanP",
                      LinkedIn:
                        "https://www.linkedin.com/in/erlan-yusuf-rafif-abd19082009/",
                      Instagram: "https://www.instagram.com/rlabn_/",
                    }[social]
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-indigo-500 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
