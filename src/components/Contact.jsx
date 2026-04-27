import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub,FaMapMarkerAlt,FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="py-20 bg-dark-100"
    >
      <div className='container mx-auto px-6'>
        <h2 className="text-white text-4xl font-bold mb-4 text-center">Get in <span className="text-purple">Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Feel free to reach out for collaborations or projects!</p>
      </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/*contact form*/}
          <div>
          <form className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
              <input type="text" id="name" className='w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white outline-none' placeholder='Your Name' />
            </div>
            <div>
              <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
              <input type="email" id="email" className='w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white outline-none' placeholder='Your Email' />
            </div>
            <div>
              <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
              <textarea className='w-full h-40 px-4 py-3 rounded-lg bg-dark-300 border border-dark-400 text-white outline-none' placeholder='Your Message'></textarea>
            </div>
            <button type="submit" className='w-full bg-purple hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300'>Send Message</button>
          </form>
          </div>
          {/*contact info*/}
          <div className='space-y-8'>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4"> <FaMapMarkerAlt/> </div>
              <div>
                <h3 className='text-white text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Kolkata,West Bengal</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4"> <FaEnvelope/> </div>
              <div>
                <h3 className='text-white text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>nailafarooque13@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone/>
              </div>
              <div>
                <h3 className='text-white text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 7596976455</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className='text-white font-semibold text-lg mb-4'>Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nailafarooque" className='w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 hover:bg-blue-500 text-purple hover:text-white transition duration-300'><FaLinkedin/></a>
              <a href="https://github.com/Naila1772" className='w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 hover:bg-black text-purple hover:text-white transition duration-300'><FaGithub/></a>
            </div>
            </div>
            </div>
        </div>
    </motion.div>
  )
}