"use client";

import { useState, useEffect } from "react";
import { getCertificates, Certificate } from "@/data/mockData";
import SkeletonCard from "@/components/SkeletonCard";

export default function CertificatesPage() {
  const [certificatesList, setCertificatesList] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        setLoading(true);
        const data = await getCertificates();
        setCertificatesList(data);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  return (
    <div className="py-20 max-w-6xl mx-auto px-4 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Certificates</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Sertifikat dan pencapaian yang saya dapatkan dari berbagai platform pembelajaran.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} variant="certificate" />
            ))
          : certificatesList.map((cert, index) => (
              <div key={index} className="overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-900/50 shadow-xl shadow-black/10 hover:-translate-y-2 transition-all duration-300">
                <img src={cert.image} alt={cert.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-indigo-400 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-300 transition-colors duration-200"
                  >
                    Lihat Kredensial
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
