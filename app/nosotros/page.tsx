"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nosotros() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { staggerChildren: 0.2 } } 
  };
  
  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };

  const estadisticas = [
    { valor: "+150", etiqueta: "Projects Delivered" },
    { valor: "1M+", etiqueta: "Lines of Code" },
    { valor: "40+", etiqueta: "Expert Engineers" },
    { valor: "99.9%", etiqueta: "System Uptime" }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 text-center relative z-10">
        <motion.div initial="hidden" animate="show" variants={containerVariants} className="max-w-4xl mx-auto">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Architects of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">Code</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed mb-10 font-light max-w-2xl mx-auto">
            We are not just developers; we are creators of digital ecosystems. We combine precision engineering with creativity to build market-dominating software.
          </motion.p>
        </motion.div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-12 relative z-10 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {estadisticas.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500 mb-2">
                  {stat.valor}
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">
                  {stat.etiqueta}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3">The Purpose</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transforming complexity into elegant solutions.</h3>
            <p className="text-slate-600 leading-relaxed font-light mb-6">
              We were born with the conviction that good code can change entire industries. We firmly believe in software development as an artistic and mathematical discipline in equal parts.
            </p>
            <p className="text-slate-600 leading-relaxed font-light">
              Our mission is to empower ambitious companies through robust technological infrastructure, immersive interfaces, and architectures that not only work today but are ready for tomorrow.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl group"
          >
             <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-teal-500/20 z-10 group-hover:opacity-75 transition-opacity duration-500" />
             <div className="absolute inset-0 bg-slate-200 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3">Corporate DNA</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Our Identity</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Absolute Innovation", desc: "We structure projects with the most modern stacks to ensure long-term scalability." },
              { title: "Agile Transparency", desc: "Iterative methodologies that allow you to have full control and vision over every line of code." },
              { title: "Obsessive Quality", desc: "Automated testing, CI/CD, and exhaustive security reviews on every deployment." }
            ].map((valor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:border-blue-500 transition-all group"
              >
                <div className="w-12 h-12 bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-teal-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{valor.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{valor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}