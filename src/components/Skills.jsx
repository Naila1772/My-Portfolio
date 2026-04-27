import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            id="skills"
            className="py-20 bg-dark-200"
            >
                <div className='container mx-auto px-6'>
                    <h2 className="text-white text-4xl font-bold mb-4 text-center">My <span className="text-purple">Skills</span></h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Technologies I work with to bring ideas to life </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-dark-300 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer'
                            >
                                <div className='flex items-center mb-4'>
                                    <skill.icon className='text-purple w-12 h-12 mr-6' />
                                <h3 className='text-white text-xl font-semibold'>{skill.title}</h3>
                                </div>
                                <p className='text-gray-400 mb-4'>{skill.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {skill.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className='bg-dark-400 text-white text-sm px-3 py-1 rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

        </motion.div>
    )
}