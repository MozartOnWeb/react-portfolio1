import { motion } from 'framer-motion';
import React from 'react'
import Hero from '../components/hero';

const NotFound = () => {
    const variants = {
      hidden: {
        opacity: 0,
        x: -300,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, type: "spring", stiffness: 70 },
      },
      exit: {
        opacity: 0,
        x: "-90vw",
        transition: { ease: "easeOut", duration: 0.6 },
      },
    };
    return (
      <div>
        <motion.div
          exitBeforeEnter
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit">
          <Hero first="404" second="Cette page" third="N'existe pas" />
        </motion.div>
      </div>
    );
}

export default NotFound;
