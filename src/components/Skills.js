import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { TITLE_SKILLS } from './utils/constans'

const Skill = ({name, x, y, onClick}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold
      '
      whileHover={{scale:1.05}}
      initial={{ x:0, y:0 }}
      whileInView={{ x:x, y:y, transition: { duration:1.5 } }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      {name}
    </motion.div>
  )
}
const Skills = ({skills}) => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (skill) => {
    setModalInfo(skill);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{scale:1.05}}
        >
          {TITLE_SKILLS}
        </motion.div>

        {skills.map((detail) => (
          <Skill key={detail.name} {...detail} onClick={() => openModal(detail)}/>
        ))}

        {modalInfo && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#143c45] text-[#5ce1e6] p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-2xl font-bold mb-4">{modalInfo.name}</h3>
              <p>{modalInfo.description}</p>
              <button
                className="mt-4 py-2 px-4 bg-[#55b5ed] text-white rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Skills