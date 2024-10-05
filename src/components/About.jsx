import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { vijay} from "../assets"

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>

     
<div className="flex flex-col md:flex-row justify-between mt-4">
  <motion.div>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a passionate software engineer, I love Web Development, Data Science
      and mobile development. I have over 6+ years of experience on Full Stack
      Development. Born and raised in Bolivia, I moved to Canada 2 years ago
      to keep going with my studies on the field of Computer Science, I'm a
      very curious and driven person, always looking to learn something new
      and expand my knowledge collaborating with people at the same time.
    </motion.p>
  </motion.div>
  
  <motion.div
    className="mt-8 md:mt-0 md:ml-10 flex justify-center"
    variants={fadeIn("left", "spring", 0.5, 0.75)}
  >
    <img
      src={vijay}
      alt='vijay-image'
      className='w-[250px] h-auto object-contain sm:w-[300px]'
    />
  </motion.div>
</div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
