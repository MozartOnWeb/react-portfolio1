import React from "react";

// import framer motion
import { motion } from "framer-motion";

const Hero = ({ first, second, third, fourth }) => {
  return (
    <motion.div className="hero">
      <div className="content">
        <motion.h1
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 90,
            duration: 0.8,
          }}>
          {first}
          <br /> {second} <br /> {third}
        </motion.h1>
        <motion.div
          className="meet"
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{
            delay: 2.2,
            type: "spring",
            stiffness: 90,
            duration: 0.8,
          }}>
          <span>👇</span>
          <p> {fourth} </p>
        </motion.div>
        <motion.svg
          className="scroll"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.8, type: "spring", stiffness: 70 }}
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="80"
          viewBox="0 0 44 80">
          <g id="cursor-down" transform="translate(-232 -801)">
            <g
              id="Rectangle_3"
              data-name="Rectangle 3"
              transform="translate(232 801)"
              fill="none"
              stroke="#fff"
              strokeWidth="6">
              <rect width="44" height="80" rx="22" stroke="none" />
              <rect x="3" y="3" width="38" height="74" rx="19" fill="none" />
            </g>
            <motion.g
              initial={{
                y: 0,
                opacity: 0.7,
                translateX: 242,
                translateY: 815,
              }}
              animate={{
                y: 25,
                opacity: 1,
                translateX: 242,
                translateY: 815,
              }}
              transition={{
                duration: 0.7,
                yoyo: Infinity,
                type: "spring",
                stiffness: 80,
              }}
              id="Ellipse_1"
              data-name="Ellipse 1"
              transform="translate(242 815)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1">
              <ellipse cx="12" cy="12.5" rx="12" ry="12.5" stroke="none" />
            </motion.g>
          </g>
        </motion.svg>
      </div>
      <svg
        className="design"
        id="Groupe_2"
        data-name="Groupe 2"
        xmlns="http://www.w3.org/2000/svg"
        width="613"
        height="598"
        viewBox="0 0 683 668">
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 306,
            translateY: 478,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 306,
            translateY: 478,
          }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="154"
          height="150"
          rx="25"
          transform="translate(306 478)"
          fill="#2b506a"
        />
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 306,
            translateY: 179,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 306,
            translateY: 179,
          }}
          transition={{
            duration: 1,
            delay: 1.9,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_8"
          data-name="Rectangle 8"
          width="154"
          height="150"
          rx="25"
          transform="translate(306 179)"
          fill="#2b506a"
        />
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 460,
            translateY: 329,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 460,
            translateY: 329,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_6"
          data-name="Rectangle 6"
          width="153"
          height="149"
          rx="25"
          transform="translate(460 329)"
          fill="#ffd8f2"
          opacity="0.5"
        />
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 153,
            translateY: 329,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 153,
            translateY: 329,
          }}
          transition={{
            duration: 0.8,
            delay: 2,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="153"
          height="149"
          rx="25"
          transform="translate(153 329)"
          fill="#2b506a"
        />
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 153,
            translateY: 30,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 153,
            translateY: 30,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_9"
          data-name="Rectangle 9"
          width="153"
          height="149"
          rx="25"
          transform="translate(153 30)"
          fill="#2b506a"
        />
        <motion.rect
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 0,
            translateY: 179,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 0,
            translateY: 179,
          }}
          transition={{
            duration: 1,
            delay: 1.3,
            type: "spring",
            stiffness: 80,
          }}
          id="Rectangle_7"
          data-name="Rectangle 7"
          width="153"
          height="150"
          rx="25"
          transform="translate(0 179)"
          fill="#ff64cb"
        />
        <motion.circle
          initial={{
            scale: 0,
            pathLength: 0,
            translateX: 312,
            translateY: 302,
          }}
          animate={{
            scale: 1,
            pathLength: 1,
            translateX: 312,
            translateY: 332,
          }}
          transition={{
            duration: 0.8,
            delay: 1.7,
            type: "spring",
            stiffness: 80,
          }}
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="71"
          cy="71"
          r="71"
          transform="translate(312 332)"
          fill="#ff64cb"
        />
        <motion.circle
          initial={{
            scale: 0,
            opacity: 0,
            translateX: 159,
            translateY: 183,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 159,
            translateY: 183,
          }}
          transition={{
            duration: 1,
            delay: 1.6,
            type: "spring",
            stiffness: 80,
          }}
          id="Ellipse_3"
          data-name="Ellipse 3"
          cx="71"
          cy="71"
          r="71"
          transform="translate(159 183)"
          fill="#ffd8f2"
        />
      </svg>
    </motion.div>
  );
};

export default Hero;
