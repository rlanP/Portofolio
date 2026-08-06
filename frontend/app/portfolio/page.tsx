"use client";

import { useState, useEffect } from "react";
import { getProjects, Project } from "@/data/mockData";
import SkeletonCard from "@/components/SkeletonCard";

const categories = ["All", "Web Dev", "Mobile App", "UI/UX"];

export default function PortfolioPage() {
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjectsList(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-20 max-w-6xl mx-auto px-4 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Kumpulan proyek yang telah saya kerjakan dalam web development dan mobile app.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedCategory === category
                ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-gray-900/50 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} variant="project" />
            ))
          : filteredProjects.map((project, index) => (
              <div key={index} className="flex flex-col h-full rounded-2xl bg-gray-900/50 border border-gray-800/50 overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block break-all text-sm text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    {project.githubUrl}
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
