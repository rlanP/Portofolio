import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/certificates", label: "Certificates" },
    { href: "/skills", label: "Skills" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/rlanP", label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/erlan-yusuf-rafif-abd19082009/",
      label: "LinkedIn",
    },
    { href: "https://www.instagram.com/rlabn_/", label: "Instagram" },
  ];

  return (
    <footer className="mt-12 border-t border-gray-800 bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MyPortfolio.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Website portofolio dinamis yang dibangun dengan Next.js. Fokus
              pada pengalaman pengguna dan performa yang optimal.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
