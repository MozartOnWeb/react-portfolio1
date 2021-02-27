import React from "react";

// Import components
import Hero from "../components/hero";
import SkillCard2 from "../components/skillCard_2";

//Import background-svg
import { DiReact, DiJavascript1, DiSass, DiResponsive } from "react-icons/di";
import { RiHtml5Line } from "react-icons/ri";
import { TiCss3 } from "react-icons/ti";
import { SiGreensock } from "react-icons/si";
import { ReactComponent as Adobexd } from "../assets/svg/adobexd.svg";

import {motion} from 'framer-motion'

const Competence = () => {
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
    <motion.div
      exitBeforeEnter
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <Hero
        first="Découvrez les"
        second="domaines créatifs"
        third="que je couvre"
        fourth="Qu'est-ce que je sais faire ? "
      />

      <div className="competence-container">
        <SkillCard2
          svgIcon={<RiHtml5Line />}
          title="HTML"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<TiCss3 />}
          title="CSS"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<DiSass />}
          title="Sass"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<DiReact />}
          title="React"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<DiJavascript1 />}
          title="JavaScript"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<Adobexd className="adobexd" />}
          title="ADOBE XD"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<DiResponsive />}
          title="Responsive design"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
        <SkillCard2
          svgIcon={<SiGreensock className="gsap" />}
          title="Animation"
          paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus, laborum assumenda autem laudantium asperiores! Eligendi sequi culpa consectetur ducimus."
        />
      </div>
    </motion.div>
  );
};

export default Competence;
