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
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">Get in <span className="text-purple">Touch</span></h2>
        <p className='mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-16'>Feel free to reach out for collaborations or projects!</p>
      </div>
        <div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8'>
          {/*contact form*/}
          <div className='rounded-2xl bg-dark-300/70 p-4 sm:p-6'>
          <form className='space-y-6'>
            <div>
              <label htmlFor="name" className='mb-2 block text-gray-300'>Your Name</label>
              <input type="text" id="name" className='w-full rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' placeholder='Your Name' />
            </div>
            <div>
              <label htmlFor="email" className='mb-2 block text-gray-300'>Email Address</label>
              <input type="email" id="email" className='w-full rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' placeholder='Your Email' />
            </div>
            <div>
              <label htmlFor="message" className='mb-2 block text-gray-300'>Your Message</label>
              <textarea className='h-40 w-full rounded-lg border border-dark-400 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' placeholder='Your Message'></textarea>
            </div>
            <button type="submit" className='w-full rounded-lg bg-purple px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple-700'>Send Message</button>
          </form>
          </div>
          {/*contact info*/}
          <div className='space-y-6 rounded-2xl bg-dark-300/50 p-4 sm:p-6'>
            <div className="flex items-start gap-4">
              <div className="mr-2 text-2xl text-purple"> <FaMapMarkerAlt/> </div>
              <div>
                <h3 className='mb-2 text-lg font-semibold text-white'>Location</h3>
                <p className='text-gray-400'>Kolkata, West Bengal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mr-2 text-2xl text-purple"> <FaEnvelope/> </div>
              <div>
                <h3 className='mb-2 text-lg font-semibold text-white'>Email</h3>
                <p className='text-gray-400'>nailafarooque13@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mr-2 text-2xl text-purple">
                <FaPhone/>
              </div>
              <div>
                <h3 className='mb-2 text-lg font-semibold text-white'>Phone</h3>
                <p className='text-gray-400'>+91 7596976455</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className='mb-4 text-lg font-semibold text-white'>Follow Me</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/nailafarooque" className='flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 text-purple transition duration-300 hover:bg-blue-500 hover:text-white'><FaLinkedin/></a>
              <a href="https://github.com/Naila1772" className='flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 text-purple transition duration-300 hover:bg-black hover:text-white'><FaGithub/></a>
            </div>
            </div>
            </div>
        </div>
    </motion.div>
  )
}