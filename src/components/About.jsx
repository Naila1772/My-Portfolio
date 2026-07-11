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
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/*heading*/}
                <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">About <span className="text-purple">Me</span></h2>
                <p className='mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-16'>Get to know about my background and passion for web development.</p>
                {/*image+my jorney*/}
                <div className='flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-12'>
                    {/*image*/}
                    <div className='w-full overflow-hidden rounded-2xl md:w-[42%] lg:w-[46%]'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            src={assets.about} alt="About Me" className="h-[320px] w-full object-cover sm:h-[380px] md:h-full md:min-h-[480px] lg:min-h-[560px]" />
                    </div>
                    {/*my journey*/}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='w-full md:w-1/2 lg:w-[55%]'>
                        <div className='rounded-2xl p-4 sm:p-6 lg:p-8'>
                            <h3 className='mb-4 text-2xl font-semibold text-white sm:mb-6'>My Journey</h3>
                            <p className='mb-4 w-full text-gray-300 leading-7 sm:mb-6 sm:text-lg'>I am a passionate web developer with a strong background in creating dynamic and responsive websites. My journey in web development began with a curiosity for how websites work and a desire to create my own online presence. Over the years, I have honed my skills in MERN stack and various frameworks to build engaging and user-friendly web applications.</p>
                            <p className='mb-6 w-full text-gray-300 leading-7 sm:text-lg'>I am dedicated to continuous learning and staying up-to-date with the latest trends and technologies in web development. I thrive on challenges and enjoy collaborating with others to bring innovative ideas to life.</p>
                            
                            {/*Cards*/}
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6'> 
                                {
                                    aboutInfo.map((info,index) => (
                                        <div key={index} className='cursor-pointer rounded-2xl bg-gray-800 p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6'>
                                          <div className='mb-4 text-4xl text-purple'>
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