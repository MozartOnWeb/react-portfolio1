import React, { useEffect } from "react";

// ScrollBehavior
import { useInView } from "react-intersection-observer";

//Import framer motion
import { useAnimation, motion } from "framer-motion";

const ProjetItem = ({ title, subtitle, desc, image, className }) => {
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
      className={className}
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 120,
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
        },
      }}>
      <div className="left">
        <div className="projet-desc">
          <p className="title"> {title} </p>
          <p className="subtitle"> {subtitle} </p>
          <p className="desc">{desc}</p>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="" className="" />
      </div>
    </motion.div>
  );
};

export default ProjetItem;
