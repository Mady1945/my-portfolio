"use client"
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-tilt";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <section className='xs:w-[250px] w-full'>
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
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </section>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, I'm Ahmad Ibrahim, a dedicated full-stack web developer with expertise in HTML, CSS, and JavaScript. Known for crafting visually appealing and responsive user interfaces, I excel in enhancing user experiences. My skills extend to advanced styling using Tailwind CSS, while the dynamic duo of Node.js and Next.js empowers me to build robust and scalable web applications.Beyond web development, I bring versatility with proficiency in cpp, Java and Python, enriching my capabilities across diverse tech stacks. Mastering version control with Git, embracing agile methodologies, and possessing a profound understanding of RESTful API design, I am well-equipped to handle multifaceted projects. My commitment to staying abreast of the latest technologies, coupled with creativity and precision, fuels my passion for delivering innovative solutions. Let's collaborate and bring your projects to life with a blend of technical prowess and creative flair!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
