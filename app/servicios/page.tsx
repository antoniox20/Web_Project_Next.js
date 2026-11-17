"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Servicios() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const servicios = [
    { title: "Custom Web Development", tech: "Next.js, React, Node.js", desc: "High-performance web platforms with hybrid rendering, optimized for maximum speed and SEO." },
    { title: "Cloud Architecture", tech: "AWS, GCP, Azure", desc: "Migration and deployment of elastic clusters. We guarantee 99.9% uptime with significant cost reduction." },
    { title: "Native Applications", tech: "React Native, Swift, Kotlin", desc: "Fluid mobile apps with immersive interfaces and architectures designed for real-time data connection." },
    { title: "Technical Auditing", tech: "DevOps, CI/CD, Security", desc: "We refactor technical debt, optimize deployment pipelines, and conduct advanced penetration testing." }
  ];

  const tecnologias = [
    "Next.js", "React", "TypeScript", "Node.js", "Python", "AWS", "Google Cloud", 
    "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Figma"
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Tailored <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">Engineering</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Technological ecosystems designed millimeter by millimeter. We transform your company's vision into exceptional corporate software.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, type: "spring" }}
              className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-blue-500 transition-all group"
            >
              <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block">
                {servicio.tech}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {servicio.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                {servicio.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <section className="py-16 relative z-10 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase">Technologies we master</p>
        </div>
        <div className="relative w-full overflow-hidden flex py-4">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-50 to-transparent z-10" />
          <motion.div 
            className="flex items-center space-x-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...tecnologias, ...tecnologias].map((tech, idx) => (
              <div key={idx} className="flex items-center justify-center min-w-37.5 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-default">
                <span className="text-xl font-bold text-slate-700 hover:text-blue-600">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}