"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const empresas = [
    "TechCorp", "GlobalFlow", "Nexus Devs", "CloudSystems", "FinTech Latam", 
    "DataStream", "Innova Health", "SmartLogistics"
  ];

  const proyectos = [
    { categoria: "Healthcare", titulo: "Smart Medical Portal", desc: "Cloud-based hospital management platform.", imagen: "/images/shutterstock.jpg" },
    { categoria: "Tourism", titulo: "Travel Experiences", desc: "Booking engine with AI integration.", imagen: "/images/TravelExp.jpg" },
    { categoria: "Commerce", titulo: "Global E-Commerce", desc: "Scalable online store for millions of users.", imagen: "/images/E-commerce.jpg" },
    { categoria: "Transport", titulo: "Logistics Tracker", desc: "Real-time routing and tracking system.", imagen: "/images/Logistics.jpg" },
    { categoria: "Services", titulo: "Service Hub", desc: "High-performance B2B marketplace.", imagen: "/images/servicehub.jpg" },
  ];

  const angleStep = 360 / proyectos.length;

  const nextSlide = useCallback(() => setRotation((prev) => prev - angleStep), [angleStep]);
  const prevSlide = useCallback(() => setRotation((prev) => prev + angleStep), [angleStep]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); 
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <main className="relative flex-1 w-full bg-white text-slate-800 font-sans selection:bg-sky-500 selection:text-white overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-blue-100/50 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-teal-100/50 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* HERO SECTION REDISEÑADO (Logo Gigante) */}
      <section className="relative pt-40 pb-20 px-4 z-10 max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-8 px-5 py-2 rounded-full border border-slate-200 bg-white shadow-sm flex items-center gap-3 hover:border-blue-200 transition-colors cursor-default"
          >
            <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
              Premium Software Factory
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">v2.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-2xl leading-[1.05] text-slate-900"
          >
            Designing the <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">
              Digital Future.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} 
            className="text-lg sm:text-xl text-slate-500 mb-10 max-w-xl font-light leading-relaxed"
          >
            Development agency specialized in scalable digital products, cloud architecture, and high-performance immersive experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <Link href="/servicios" className="px-8 py-4 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center">
              Discover Solutions <span className="ml-2">&rarr;</span>
            </Link>
            <Link href="/nosotros" className="px-8 py-4 rounded-full font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-center">
              Our Methodology
            </Link>
          </motion.div>
        </div>

        {/* Columna Derecha: Presentación Profesional del Logo (Extra Gigante) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} 
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-20 lg:mt-0"
        >
          <div className="relative w-95 h-95 sm:w-125 sm:h-125 lg:w-162.5 lg:h-162.5 flex items-center justify-center">
            
            {/* Círculos decorativos concéntricos tipo "radar tecnológico" */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-50 to-teal-50 rounded-full blur-3xl opacity-80" />
            <div className="absolute inset-4 border border-slate-100 rounded-full animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-16 border border-slate-200/40 border-dashed rounded-full animate-[spin_35s_linear_infinite_reverse]" />
            
            {/* Tarjeta Glassmorphism EXTRA GIGANTE con Efecto Levitar */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-85 sm:max-w-120 lg:max-w-140 bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] rounded-[3rem] p-16 sm:p-20 lg:p-24 flex items-center justify-center transform hover:scale-[1.03] transition-transform duration-700"
            >
              <Image 
                src="/images/Logo1.png" 
                alt="rdisol Corporate Logo" 
                width={500} 
                height={200} 
                className="object-contain drop-shadow-2xl" 
                priority 
              />
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* Section: Companies that trust us */}
      <section className="py-16 relative z-10 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase">Trusted by industry leaders</p>
        </div>
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-50 to-transparent z-10" />
          <motion.div 
            className="flex items-center space-x-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...empresas, ...empresas].map((empresa, idx) => (
              <div key={idx} className="flex items-center justify-center min-w-50 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                <span className="text-2xl font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  {empresa}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Native Development", desc: "Clean and optimized code for maximum speed, reducing load times and improving energy efficiency across all devices." },
              { title: "Cloud Infrastructure", desc: "Deployments on AWS and GCP with auto-scaling to support millions of concurrent users without performance drops." },
              { title: "Bank-Grade Security", desc: "End-to-end data encryption, rigorous penetration testing, and continuous vulnerability audits to keep your platform safe." }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl border border-teal-200 mb-8 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                  <div className="w-5 h-5 bg-teal-500 group-hover:bg-white rounded-full transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION: Projects (3D CAROUSEL) */}
      <section className="py-32 relative z-10 overflow-hidden bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Success stories that speak for us
            </h3>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
              Healthcare, tourism, commerce, transport, and service companies already trust rdisol with their most complex digital transformations.
            </p>
          </motion.div>
        </div>

        <div className="relative h-120 w-full flex flex-col items-center justify-center" style={{ perspective: "1200px" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div animate={{ rotateY: rotation }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} style={{ transformStyle: "preserve-3d" }} className="relative w-[320px] h-100 md:h-110 scale-75 sm:scale-100 z-10">
            {proyectos.map((proyecto, i) => {
              const itemAngle = i * angleStep;
              return (
                <div key={i} className="absolute top-0 left-0 w-full h-full" style={{ transform: `rotateY(${itemAngle}deg) translateZ(350px)`, transformStyle: "preserve-3d" }}>
                  <div className="group relative rounded-3xl bg-white overflow-hidden shadow-xl border border-slate-200 h-full flex flex-col cursor-pointer hover:border-blue-400 hover:shadow-2xl transition-all">
                    <div className="p-3">
                      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50/80 backdrop-blur-md">
                          <span className="w-3 h-3 rounded-full bg-red-400"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="w-3 h-3 rounded-full bg-teal-400"></span>
                        </div>
                        <div className="relative aspect-16/10 overflow-hidden">
                          <Image src={proyecto.imagen} alt={proyecto.titulo} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 select-none pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4 px-6 pb-6 pt-3 grow">
                      <div className="min-w-0 flex flex-col justify-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-1">{proyecto.categoria}</span>
                        <h3 className="truncate text-xl font-bold text-slate-900 mb-1">{proyecto.titulo}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2 font-light leading-relaxed">{proyecto.desc}</p>
                      </div>
                      <span className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
          <div className="absolute -bottom-16 flex justify-center gap-6 z-30">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white border border-slate-300 hover:bg-slate-100 transition-all text-slate-800 shadow-md flex items-center justify-center hover:scale-110" aria-label="Previous project">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-white border border-slate-300 hover:bg-slate-100 transition-all text-slate-800 shadow-md flex items-center justify-center hover:scale-110" aria-label="Next project">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 1: Global Impact (Métricas) */}
      <section className="py-20 relative z-10 bg-slate-900 border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guaranteed" },
              { number: "50M+", label: "API Requests Handled" },
              { number: "24/7", label: "Premium Support" }
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="flex flex-col space-y-2">
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-300">
                  {stat.number}
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 2: Tech Stack */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-4">Technology Stack</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Powered by modern technologies.</h3>
            <p className="text-lg text-slate-500 font-light">We leverage the most advanced and stable frameworks to ensure your product is scalable, secure, and future-proof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", tech: "React, Next.js, Tailwind, Vue" },
              { category: "Backend", tech: "Node.js, Python, Laravel, Go" },
              { category: "Cloud & DevOps", tech: "AWS, GCP, Docker, Kubernetes" },
              { category: "Databases", tech: "PostgreSQL, MongoDB, Redis, MySQL" }
            ].map((stack, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg border border-blue-200 mb-6 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{stack.category}</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{stack.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 3: Engineering Standard */}
      <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-4">Engineering Standards</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Built for scale. Designed for humans.</h3>
            <p className="text-lg text-slate-500 font-light">From concept to deployment, we follow a rigorous engineering methodology to ensure your product performs flawlessly under pressure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { step: "01", title: "Architecture First", desc: "We design robust cloud infrastructures before writing a single line of code." },
                { step: "02", title: "Iterative Sprints", desc: "Receive functional updates every two weeks. Full transparency, zero surprises." },
                { step: "03", title: "Automated QA", desc: "Every commit is tested via automated pipelines to ensure absolute stability." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="shrink-0 text-3xl font-black text-slate-200">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
               <Image src="/images/servicehub.jpg" alt="Engineering code" fill className="object-cover hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent flex items-end p-8">
                 <p className="text-white font-medium text-lg">We write code that defines industries.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN 4: Client Testimonials */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-4">Partner Success</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What our clients say.</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "The architectural decisions made by rdisol saved us thousands in cloud costs while improving our API response times by 40%.", author: "Sarah Jenkins", role: "CTO, FinTech Latam" },
              { quote: "They don't just write code; they understand business goals. The team delivered our medical portal weeks ahead of schedule.", author: "Dr. Marcos Silva", role: "Director, Innova Health" },
              { quote: "Our Black Friday traffic usually crashes the site. With the new headless architecture built by rdisol, we had zero downtime.", author: "Elena Rostova", role: "E-Commerce Head, GlobalFlow" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative hover:shadow-lg transition-shadow">
                <svg className="w-10 h-10 text-blue-200 absolute top-8 left-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.5c.3-1.9 1.9-3.5 3.8-3.5h1.7V8h-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5.5c.3-1.9 1.9-3.5 3.8-3.5h1.7V8h-4z"/></svg>
                <p className="text-slate-600 italic mb-8 relative z-10 pt-10 font-light leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <span className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-32 px-4 relative z-10 border-t border-slate-200 bg-slate-50 overflow-hidden">
        {/* Abstract circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60" />
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Ready to scale your business?
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Stop settling for average digital solutions. Let's discuss your next big idea and build a platform that sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contactos" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/30 hover:-translate-y-1">
                Start a Project <span className="ml-2">&rarr;</span>
              </Link>
              <Link href="/proyectos" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
                View more work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}