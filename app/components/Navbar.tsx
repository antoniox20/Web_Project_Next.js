"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/servicios" },
    { name: "Processes", path: "/procesos" },
    { name: "Projects", path: "/proyectos" },
    { name: "About Us", path: "/nosotros" },
    { name: "Contact", path: "/contactos" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/80 border border-slate-200/80 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg relative">
        
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/" className="text-2xl font-extrabold text-blue-600">
            rdisol<span className="text-teal-500">.</span>
          </Link>
        </motion.div>

        {/* Menú Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-medium text-slate-600">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className={`transition-colors ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Botón Menú Móvil */}
        <button 
          className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl p-6 md:hidden z-40"
          >
            <ul className="flex flex-col space-y-6 text-center">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      onClick={() => setIsOpen(false)} 
                      className={`block text-lg font-medium transition-colors ${isActive ? "text-blue-600 font-bold" : "text-slate-600 hover:text-blue-600"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}