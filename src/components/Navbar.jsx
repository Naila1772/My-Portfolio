import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="fixed top-0 z-50 w-full bg-dark-100/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
         <a href="#" className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
            Naila
            <span className="text-purple">Farooque</span>
            <span className="h-3 w-3 rounded-full bg-purple"></span>
            </a> 
        </div>
        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          <a href="#home" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>Home</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
          <a href="#about" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>About</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
           <a href="#skills" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>Skills</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
          <a href="#projects" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>Projects</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
          <a href="#experience" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>Experience</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
          <a href="#contact" className="group relative text-sm text-white/80 transition duration-300 hover:text-purple lg:text-base">
          <span>Contact</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple transition-all duration-300 group-hover:w-full"></span>
         </a>
        </div>

           {/* Mobile button */}
             <button onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 text-white transition hover:bg-white/10 md:hidden">
                {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-dark-100/95 px-4 py-4 backdrop-blur-sm md:hidden">
          <a href="#home" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#contact" className="block py-2 text-white hover:text-purple" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}