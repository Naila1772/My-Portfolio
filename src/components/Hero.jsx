import React from "react";
import { motion } from "framer-motion";
import {assets} from "../assets/assets";

export default function Hero() {
  return (  
    <motion.div
      initial={{ opacity: 0 , y: 50}}
      whileInView={{ opacity: 1 , y: 0}}
      transition={{ duration: 0.5, ease:"easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-4 sm:px-6 md:flex-row md:gap-8 lg:px-8">
        {/* Left side Content */}
        <div className="mb-10 w-full text-center md:mb-0 md:w-1/2 md:text-left"> 
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">Hi, I'm <span className="text-purple-500">Naila Farooque</span></h1>
          <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Full Stack Developer</h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-gray-300 sm:text-lg md:mx-0">I create stunning web experiences with modern technologies and innovative designs to enhance user experience.</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-purple px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-purple-700">View Projects</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-purple px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple-700">Contact Me</a>
        </div>
        </div>
        {/* Right side Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70">
              <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4 , repeat: Infinity, repeatType:"loop",ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              src={assets.profile}
                alt="Profile"
               ></motion.img>
            </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
}