"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contacto() {
  const [year, setYear] = useState(2026);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating a network delay of 1.5 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Hide the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
          <span className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4 block">Let's Talk</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Start your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-sky-500 to-teal-500">Project.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Have a bold vision? We have the technical talent to make it a reality. Fill out the form below or write to us directly.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-24 items-start">
          
          {/* Contact Information (Left - Takes 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 flex flex-col justify-center space-y-10"
          >
            <div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Direct Email</span>
              <a href="mailto:hello@rdisol.com" className="text-2xl md:text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                hello@rdisol.com
              </a>
            </div>

            <div className="w-12 h-px bg-slate-200" />

            <div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Support & Sales</span>
              <a href="https://wa.me/591XXXXXXXX" target="_blank" rel="noreferrer" className="text-2xl md:text-3xl font-bold text-slate-900 hover:text-teal-600 transition-colors flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                WhatsApp
              </a>
            </div>

            <div className="w-12 h-px bg-slate-200" />

            <div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Operations Base</span>
              <p className="text-xl text-slate-700 font-light">
                Cochabamba, Bolivia<br/>
                <span className="text-base text-slate-400">Operating globally.</span>
              </p>
            </div>
          </motion.div>

          {/* Form (Right - Takes 3 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3 relative"
          >
            <form onSubmit={handleSubmit} className="relative bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    required 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Corporate Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="servicio" className="text-sm font-medium text-slate-700">What kind of solution are you looking for?</label>
                <select 
                  id="servicio" 
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="web">Web Development / Platform</option>
                  <option value="app">Mobile Application</option>
                  <option value="cloud">Cloud Architecture & DevOps</option>
                  <option value="consultoria">Technical Consulting / Audit</option>
                  <option value="otro">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">Tell us about your project</label>
                <textarea 
                  id="mensaje" 
                  rows={4} 
                  required 
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-400 resize-none"
                  placeholder="Detail your main objectives, estimated timelines, and any technical requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full relative group flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </span>
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-teal-700 text-sm text-center font-medium"
                >
                  Message sent successfully! Our team will contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}