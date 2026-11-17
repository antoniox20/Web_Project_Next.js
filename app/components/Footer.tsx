import Image from "next/image";

export default function Footer() {
  const currentYear = 2026; 

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <Image 
          src="/images/Logo2.png" 
          alt="rdisol Logo Footer" 
          width={100} 
          height={30} 
          className="object-contain opacity-70 mb-6 hover:opacity-100 transition-opacity" 
        />
        <p className="text-slate-600 mb-8 max-w-md font-light">
          Redefining software development standards through technical innovation and exceptional design.
        </p>
        <div className="text-sm text-slate-500 font-light">
          &copy; {currentYear} rdisol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}