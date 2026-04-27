import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="about"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-0 px-6">
                {/*heading*/}
                <h2 className="text-white text-4xl font-bold mb-4 text-center">About <span className="text-purple">Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Get to know about my background and passion for web development. </p>
                {/*image+my jorney}*/}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/*image*/}
                    <div className='md:w-1/2 h-210 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            src={assets.about} alt="About Me" className="w-full h-full object-cover" />
                    </div>
                    {/*my journey*/}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'>
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6 text-white'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I am a passionate web developer with a strong background in creating dynamic and responsive websites. My journey in web development began with a curiosity for how websites work and a desire to create my own online presence. Over the years, I have honed my skills in MERN stack and various frameworks to build engaging and user-friendly web applications.</p>
                            <p className='text-gray-300 mb-6'>I am dedicated to continuous learning and staying up-to-date with the latest trends and technologies in web development. I thrive on challenges and enjoy collaborating with others to bring innovative ideas to life. </p>
                            
                            {/*Cards*/}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> 
                                {
                                    aboutInfo.map((info,index) => (
                                        <div key={index} className='bg-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                                          <div className='text-purple text-4xl mb-4'>
                                            <info.icon />
                                          </div>
                                          <h4 className='text-white text-xl font-semibold mb-3'>{info.title}</h4>
                                          <p className='text-gray-400 '>{info.description}</p>
                                        </div>
                                     )) 
                                }
                                </div>
                        </div>
                        
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}