import React, { useEffect } from "react";

// ScrollBehavior
import { useInView } from "react-intersection-observer";

//Import framer motion
import { useAnimation, motion } from "framer-motion";

const SkillCard2 = ({ title, paragraph, svgIcon }) => {
  const animation = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      className="skill-containers"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 90,
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
          x: 70,
        },
      }}>
      <div className="svg-cover">{svgIcon}</div>

      <div className="skill-infos">
        <h2> {title} </h2>
        <p>{paragraph}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard2;
