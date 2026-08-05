"use client";

import { useState, useEffect } from "react";
import { getSkills, Skill } from "@/data/mockData";
import SkeletonCard from "@/components/SkeletonCard";

export default function SkillsPage() {
  const [skillsList, setSkillsList] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        setLoading(true);
        const data = await getSkills();
        setSkillsList(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSkills();
  }, []);

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
        </h1>
      </div>

      <div className="space-y-4">
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <SkeletonCard key={i} variant="skill" />
            ))
          : skillsList.map((skill, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-sm font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: `${skill.percentage}%` }} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
