import React from "react";

// Import components
import Hero from "../components/hero";
import ProjetItem from "../components/projetItem";
import SkillSection from "../components/skillSection";

// import images data
import imagesData from "../data/imagesData";

import { motion } from "framer-motion";


const Home = () => {
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
        first="Vivez une"
        second="incroyable"
        third="expérience web"
        fourth="Qu'est-ce que je fais ?"
      />
      <ProjetItem
        className="projet-container"
        title="Dernière Création"
        subtitle="Du travailde qualité premium"
        desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
        image={imagesData[0].source}
      />

      <ProjetItem
        className="projet-container reverse"
        title="vidéo studio website"
        subtitle="Avec React & Farmer Motion"
        desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
        image={imagesData[1].source}
      />

      <SkillSection />

      <div className="project-section">
        <ProjetItem
          className="projet-container"
          title="Site vitrine"
          subtitle="Avec ScrollReveal.JS & SASS"
          desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
          image={imagesData[2].source}
        />

        <ProjetItem
          className="projet-container reverse"
          title="formulaire de connexion"
          subtitle="Avec Adobe XD"
          desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
          image={imagesData[3].source}
        />
      </div>
    </motion.div>
  );
};

export default Home;
