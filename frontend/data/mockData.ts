export interface Project {
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  stars: number;
}

const projects: Project[] = [
  { title: "CaseFlow", category: "Web Dev", description: "Membuat platform manajemen kasus sidang", githubUrl: "#", image: "project1.png" },
   { title: "CTF Writeup", category: "Cyber Security", description: "Writeup CTF yang telah saya kerjakan", githubUrl: "https://github.com/rlanP/ctf-writeup", image: "project2.png" },
];

const skills: Skill[] = [
  { name: "React / Next.js", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "Tailwind CSS", percentage: 95 },
  { name: "Digital Forensic", percentage: 88 },
  { name: "Penetration Tester", percentage: 67 },

];

const certificates: Certificate[] = [
  {
    name: "DIGIUP 2025 CYBER SECURITY OFFICER",
    issuer: "PT Telkom Prima Cipta Certifia",
    date: "2025",
    image: "/certificates1.jpeg",
  },
  {
    name: "TRYHACKME - Pre Security Certificates of Completion ",
    issuer: "TryHackMe",
    date: "2026",
    image: "/certificates2.png",
  },

];

const testimonials: Testimonial[] = [
  {
    name: "Fawwaz Arya",
    role: "SOC Analyst",
    company: "PT CyberDef Indonesia",
    quote: "Keahliannya sangat bagus dan profesional, tidak perlu diragukan",
    stars: 5,
  },
  {
    name: "Christian Renato Wongkar",
    role: "IT Consultant",
    company: "PT Dirgantara Indonesia",
    quote: "Sangat profesional, hasilnya bersih dan mudah digunakan. Review teknisnya juga sangat detail.",
    stars: 4,
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1000);
  return projects;
}

export async function getSkills(): Promise<Skill[]> {
  await delay(1000);
  return skills;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1000);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(1000);
  return testimonials;
}
