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
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side Content */}
        <div className="md:w-1/2 mb-10 md:mb-0"> 
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white whitespace-nowrap">Hi, I'm <span className="text-purple-500"> Naila Farooque</span> </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter text-white">Full Stack Developer</h2>
          <p className=" text-lg text-gray-300 mb-8">I create stunning web experiences with modern technologies and innovative designs to enhance user experience.</p>
        <div className="flex space-x-4">
          <a href="#projects" className=" bg-purple font-medium text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-purple-700 ">View Projects</a>
          <a href="#contact" className=" border border-purple font-medium text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-purple-700 ml-4">Contact Me</a>
        </div>
        </div>
        {/* Right side Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
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