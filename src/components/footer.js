import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "antd";

// import framer motion
import { motion, useAnimation } from "framer-motion";

// ScrollBehavior
import { useInView } from "react-intersection-observer";

//Import social icons
import { ReactComponent as Behance } from "../assets/icons/behance.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Dribble } from "../assets/icons/dribble.svg";

import { BsArrowUpDown } from "react-icons/bs";


const Footer = () => {

  const animation = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);


  const { Panel } = Collapse;

  return (
    <motion.div
      className="footer-container"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
        hidden: {
          opacity: 0,
          y: 50,
        },
      }}>
      <div className="footer-info">
        <div className="sub-container">
          <NavLink className="logo" to="/">MOZaRT</NavLink>

          <div className="footer-socials">
            <ul>
              <li>
                <a href="https://behance.com">
                  <Behance className="behance" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <Instagram className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://dribble.com">
                  <Dribble className="dribble" />
                </a>
              </li>
            </ul>
          </div>
          <p>Badalabougou / Bamako / Mali</p>
        </div>

        <div className="footer-links">
          <Collapse
            className="footer-collapse"
            accordion
            defaultActiveKey={["2"]}
            bordered={false}
            expandIcon={() => (
              <BsArrowUpDown
                style={{ width: "20px" }}
                className="expanded-icon"
              />
            )}
            expandIconPosition={"left"}>
            <Panel
              className="footer-panel"
              header="Services"
              key="1"
              showArrow={true}>
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                Développement Web
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                UI UX Design
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                Design d'Identité
              </motion.p>
            </Panel>
            <Panel className="footer-panel" header="Contact" key="2">
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                78 43 73 23
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                61 34 40 35
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}>
                mandjoudama@gmail.com
              </motion.p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <motion.svg
        id="Groupe_2"
        data-name="Groupe 2"
        xmlns="http://www.w3.org/2000/svg"
        width="613"
        height="598"
        viewBox="0 0 683 668">
        <motion.rect
          initial={{
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
            delay: 1.2,
            type: "spring",
            stiffness: 90,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
            translateX: 312,
            translateY: 302,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            translateX: 312,
            translateY: 332,
          }}
          transition={{
            duration: 0.8,
            yoyo: Infinity,
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
            scale: 0.5,
            opacity: 0.5,
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
            yoyo: Infinity,
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
      </motion.svg>
    </motion.div>
  );
};

export default Footer;
