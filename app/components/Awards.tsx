'use client';

import { useState,useEffect } from 'react';
import { useSpring} from 'react-spring';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './styles/Awards.module.css'; // Import the CSS module



interface Award {
  image: string;
  title: string;
}


const awards: Award[] = [
  {
      image: "/images/image002.png",
      title: "award 1"
    },

    {
      image: "/images/image003.png",
      title: "award 2"

    },
    
];


const Awards: React.FC = () => {
  return (
    <section id="courses" className={`${styles.coursesSection} py-5`}>
      <div className={`${styles.coursesContainer} container mx-auto max-w-7xl px-4 h-full`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full">
          {awards.map((awards, index) => (
            <AwardCard key={index} awards={awards} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardCard: React.FC<{ awards: Award; index: number }> = ({ awards, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-b from-[#751904] to-[#b44e0f] rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-transform duration-300"
        style={{ perspective: 1000 }}
      >
        <Image 
          src={awards.image} 
          alt={awards.title}
          className="w-full h-48 object-cover rounded-t-lg"
          width={300}
          height={200} 
        />
         
          {/* <div className="mb-4">
            <p className="text-gray-700">{course.subtitle}</p>
          </div> */}
       
      </motion.div>
  );
};

export default Awards;
