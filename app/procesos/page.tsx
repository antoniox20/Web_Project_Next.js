"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Procesos() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const pasos = [
    {
      id: "01",
      titulo: "Discovery & Strategy",
      desc: "We start by understanding the core of your business. We analyze feasibility, define the technical architecture, and map out a clear roadmap to ensure the product solves real problems.",
      tech: "Research, Roadmap, Architecture"
    },
    {
      id: "02",
      titulo: "UI/UX Design & Prototyping",
      desc: "We transform complex concepts into intuitive and stunning interfaces. We create wireframes and high-fidelity interactive prototypes focused on end-user retention.",
      tech: "Figma, User Journey, Design System"
    },
    {
      id: "03",
      titulo: "Agile Development (Sprints)",
      desc: "Our engineers write clean, modular, and scalable code. We work using agile methodologies, delivering operational features every couple of weeks for continuous feedback.",
      tech: "Next.js, React, Node, Python"
    },
    {
      id: "04",
      titulo: "Quality Assurance (QA)",
      desc: "We leave nothing to chance. We perform unit, integration, automated testing, and penetration testing (pentesting) to ensure the system is bulletproof and bug-free.",
      tech: "Automated Testing, Security, QA"
    },
    {
      id: "05",
      titulo: "Deployment & Infrastructure",
      desc: "We prepare cloud servers and databases. We set up CI/CD pipelines so production rollouts are automated, secure, and have zero downtime.",
      tech: "AWS, Docker, Kubernetes, CI/CD"
    },
    {
      id: "06",
      titulo: "Scalability & Support",
      desc: "The launch is just the beginning. We monitor system performance 24/7, optimize server costs, and scale the infrastructure dynamically as your user base grows.",
      tech: "L3 Support, Monitoring, DevOps"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4 block">Work Methodology</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            The Art of Building <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">Software.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            A structured, transparent engineering process designed to mitigate risks, ensuring world-class digital products from day zero.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {pasos.map((paso, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={paso.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-slate-300 items-center justify-center z-10 shadow-md">
                    <span className="w-4 h-4 rounded-full bg-blue-600 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
                  >
                    <div className="relative p-px rounded-3xl bg-white border border-slate-200 shadow-xl group hover:border-blue-500 transition-all">
                      <div className="relative bg-white p-8 md:p-10 rounded-3xl overflow-hidden">
                        
                        {/* Giant Background Number */}
                        <span className="absolute -top-6 -right-4 text-9xl font-black text-slate-100 pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                          {paso.id}
                        </span>

                        <span className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-3 block relative z-10">
                          Phase {paso.id} — {paso.tech}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-blue-600 transition-colors">
                          {paso.titulo}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light relative z-10">
                          {paso.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 relative z-10 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Your vision. Our process.
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-light max-w-2xl mx-auto">
              Building software isn't just about writing code, it's about making the right decisions. Start your project with the right team.
            </p>
            <Link href="/contactos" className="inline-flex items-center px-10 py-4 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              Get a Quote <span className="ml-2">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}