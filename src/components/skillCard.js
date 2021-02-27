import React, { useEffect } from "react";

// Import framer-motion
import { motion, useAnimation } from "framer-motion";

// ScrollBehavior
import { useInView } from "react-intersection-observer";

const SkillCard = ({ icon, title, desc }) => {
  const animation = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
        },
      }}>
      <div className="skill-container">
        <div className="icon">{icon}</div>
        <h3> {title} </h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
