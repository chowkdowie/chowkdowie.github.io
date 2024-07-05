import React from 'react'
//import Tilt  from 'react-tilt'
//import Tilt from 'react-parallax-tilt';
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full yellow-green-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div
      className='bg-[#FFA9F9]'
    >
      <motion.div variants={textVariant()}>
        
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#3B444B] text-[17px] max-w-3xl leading-[30px] bg-[#FFA9F9]"
      >
        I am from Calgary, Alberta and am currently studying Systems Design Engineering at the 📍University of Waterloo. I’m passionate about design and innovation, and grow increasingly fascinated by the intersection of arts, creativity, and technology. 
        I’m a quick learner, enthusiastic, and in my free time enjoy challenging myself with new languages, tech projects, and 🎵dance choreographies.
        
        Let’s connect! 📧
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index= {index} {...service} />
        ))}
        
      </div>
      
    </div>
  )
}

export default SectionWrapper(About, "about")