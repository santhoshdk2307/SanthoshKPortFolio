import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { AZ900 } from "../assets";
import { AZ204 } from "../assets";
import { AZ204C } from "../assets";
import { AZ900C } from "../assets";


// Replace this with your certification data and download links
const certifications = [
  {
    testimonial:
      "Successfully completed the AZ-900: Microsoft Azure Fundamentals certification, demonstrating a foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    name: "AZ-900",
    designation: "Certification",
    company: "Microsoft",
    image: AZ900, 
    downloadLink: AZ900C, 
  },
  {
    testimonial:
      "Achieved the AZ-204: Developing Solutions for Microsoft Azure certification, validating my ability to develop, test, and maintain cloud applications and services on Microsoft Azure.",
    name: "AZ-204",
    designation: "Certification",
    company: "Microsoft",
    image: AZ204, 
    downloadLink: AZ204C, 
  },
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  downloadLink, // Add downloadLink as a prop
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`certification_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>

    {/* Download Link */}
    <div className="mt-4">
      <a 
        href={downloadLink} 
        download 
        className="text-blue-500 underline" 
      >
        Download Certificate
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <FeedbackCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");
