"use client";

import { useState, useEffect } from "react";
import { getTestimonials, Testimonial } from "@/data/mockData";
import SkeletonCard from "@/components/SkeletonCard";

export default function TestimonialsPage() {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonialsList(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <div className="py-20 max-w-6xl mx-auto px-4 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          Client <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Testimonials</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Apa kata mereka yang pernah bekerja sama dengan saya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} variant="testimonial" />
            ))
          : testimonialsList.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 flex flex-col hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 flex-1">
                  <p className="text-gray-400 italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-800/50">
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-indigo-400">{testimonial.role} di {testimonial.company}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.stars }, (_, starIndex) => (
                      <span key={starIndex} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
