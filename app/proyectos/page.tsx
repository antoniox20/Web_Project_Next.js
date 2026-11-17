"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Proyectos() {
  const proyectos = [
    { 
      categoria: "Healthcare", 
      titulo: "Smart Medical Portal", 
      desc: "Comprehensive cloud hospital management platform. Allows doctors to access clinical records in real-time, schedule AI-powered appointments, and conduct high-quality telemedicine.", 
      tech: ["React", "Node.js", "AWS", "WebRTC"],
      imagen: "/images/shutterstock.jpg" 
    },
    { 
      categoria: "Tourism", 
      titulo: "Travel Experiences", 
      desc: "High-performance booking engine connecting travelers with unique local experiences. Includes a personalized recommendation algorithm and multi-currency payment gateway.", 
      tech: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
      imagen: "/images/TravelExp.jpg" 
    },
    { 
      categoria: "Commerce", 
      titulo: "Global E-Commerce", 
      desc: "Headless architecture for an online store supporting over 10,000 transactions per minute during Black Friday with zero latency, optimizing conversion rates by 40%.", 
      tech: ["Shopify Plus", "GraphQL", "React", "Redis"],
      imagen: "/images/E-commerce.jpg" 
    },
    { 
      categoria: "Transport", 
      titulo: "Logistics Tracker", 
      desc: "Mobile app and web dashboard for real-time fleet routing and tracking. Reduces delivery times through machine learning route optimization.", 
      tech: ["React Native", "Google Maps API", "Firebase", "Python"],
      imagen: "/images/Logistics.jpg" 
    },
    { 
      categoria: "Services", 
      titulo: "B2B Service Hub", 
      desc: "Corporate marketplace connecting companies with verified suppliers. Features a smart contract system and automated workflows for audits.", 
      tech: ["Vue.js", "Laravel", "Docker", "AWS S3"],
      imagen: "/images/servicehub.jpg" 
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4 block">Our Portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Software that empowers <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">Leaders.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Explore a curated selection of our success stories. From emerging startups to multinational corporations.
          </p>
        </motion.div>
      </section>

      {/* Projects Gallery (Zig-Zag Layout) */}
      <section className="pb-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-32">
          {proyectos.map((proyecto, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Project Image */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group rounded-3xl p-px bg-slate-200 shadow-xl overflow-hidden">
                    <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 aspect-4/3">
                      <div className="absolute top-0 left-0 w-full flex items-center gap-1.5 px-4 py-3 bg-slate-200/80 backdrop-blur-md z-20 border-b border-slate-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                      </div>
                      
                      <Image 
                        src={proyecto.imagen} 
                        alt={proyecto.titulo} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-all duration-700 mt-10"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-4 block">
                    Industry: {proyecto.categoria}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                    {proyecto.desc}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {proyecto.tech.map((tecnologia, idx) => (
                      <span key={idx} className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700">
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div>
                    <Link href="/contactos" className="group inline-flex items-center text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                      <span className="bg-slate-100 p-3 rounded-full mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:rotate-45 transition-transform duration-300">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </span>
                      Explore success story
                    </Link>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-4 relative z-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Your project is our next success story.
            </h2>
            <p className="text-xl text-slate-600 mb-10 font-light max-w-2xl mx-auto">
              Join the companies already transforming their digital future with our custom software solutions.
            </p>
            <Link href="/contactos" className="inline-flex items-center px-10 py-4 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              Contact the Team <span className="ml-2">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}