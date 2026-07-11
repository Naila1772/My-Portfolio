import React from 'react'
import { motion } from 'framer-motion'
import { assets, projects as portfolioProjects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

export default function Projects() {
  const projects = portfolioProjects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    image: project.image,
    description: project.description,
    technologies: project.tech,
    demo: project.demo,
    code: project.code,
  }))

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
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {/*project cards*/}
          {projects.map(project => (
            <div key={project.id} className="flex h-full flex-col overflow-hidden rounded-2xl bg-dark-300 transition duration-300 hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover sm:h-60" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 min-h-[72px] text-gray-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="rounded-full bg-dark-400 px-3 py-1 text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <a href={project.demo} className="w-full rounded-lg bg-purple px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-purple-700 sm:flex-1" target="_blank" rel="noopener noreferrer">
                    Explore
                  </a>
                  <a href={project.code} className="w-full rounded-lg border border-purple px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-purple-700 sm:flex-1" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
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