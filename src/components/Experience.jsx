import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            id="experience"
            className="py-20 bg-dark-100"
        >
            <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
                <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">My <span className="text-purple">Experience</span></h2>
                <p className='mx-auto mb-10 max-w-2xl text-center text-gray-400 sm:mb-16'>My professional journey and key milestones</p>
                <div className='mx-auto max-w-3xl'>
                    <div className='space-y-8 sm:space-y-12'>
                        {
                            workData.map((work, index) => (
                                <div key={index} className='relative pl-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 sm:pl-12'
                                >
                                  {/*timeline dot*/}
                                  <div className='absolute left-0 top-0 h-4 w-4 rounded-full bg-purple sm:h-5 sm:w-5'></div>
                                  <div className='absolute left-[0.37rem] top-0 h-full w-[2px] bg-purple sm:left-[0.55rem]'></div>
                                    {/*content box*/}
                                    <div className="rounded-2xl bg-dark-300 p-4 sm:p-6">
                                       <div className="mb-2 flex flex-col gap-2 text-white sm:flex-row sm:items-start sm:justify-between">
                                        <h3 className='text-lg font-semibold sm:text-xl'>{work.role}</h3>
                                        <span className='rounded-full bg-purple/20 px-3 py-1 text-xs text-purple sm:text-sm'>{work.duration}</span>
                                       </div>
                                        <p className='mb-2 text-gray-400'>{work.company}</p>
                                        <p className='text-gray-300'>{work.description}</p>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}