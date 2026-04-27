import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', image: assets.project1, description: 'Description for project 1', technologies: ['React', 'Node.js'] },
    { id: 2, title: 'Project 2', image: assets.project2, description: 'Description for project 2', technologies: ['Vue.js', 'Express'] },
    { id: 3, title: 'Project 3', image: assets.project3, description: 'Description for project 3', technologies: ['Angular', 'MongoDB'] },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl font-bold mb-4 text-center">My <span className="text-purple">Projects</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>A collection of my recent work and projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
          {/*project cards*/}
          {projects.map(project => (
            <div key={project.id} className="bg-dark-300 rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='bg-dark-400 text-white text-sm px-3 py-1 rounded-full'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a href="#" className='flex-1 text-center bg-purple hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300'>
                    View Demo
                  </a>
                  <a href="#" className='flex-1 text-center border border-purple hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300'>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 text-white transition duration-300 "> 
          <span>View More Projects </span>
             <FaArrowRight className='ml-2'/> 
          </a>
        </div>
      </div>
    </motion.div>
  )
}