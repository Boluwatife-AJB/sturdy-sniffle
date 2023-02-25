'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Judah Perez
          </h4>
          <p className="mt-[8px] font-normal  sm:text-[18px] text-[12px] sm:leading-[22px]leading-[16px] text-white">
            Founder | MetaVerse
          </p>
        </div>
        <p className="mt-[24px] font-normal  sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id
          sapiente quod dicta itaque, sequi, ipsum quis, voluptas earum
          laudantium qui repellat! Facere error doloribus saepe laborum velit."
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
