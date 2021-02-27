import React from 'react'

// Import components
import Hero from '../components/hero'
import ProjetItem from "../components/projetItem";

// import images data
import imagesData from "../data/imagesData";

import { motion } from "framer-motion";



const Projet = () => {

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
          first="La passion !"
          second="Au coeur de tous"
          third="mes projets"
          fourth="Découvrir"
        />

        <div className="project-section">
          <ProjetItem
            className="projet-container"
            title="Site Vitrine"
            subtitle="Avec ScrollReveal.JS & Saas"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[2].source}
          />
          <ProjetItem
            className="projet-container reverse"
            title="Formulaire de connexion"
            subtitle="Avec Adobe XD"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[7].source}
          />

          <ProjetItem
            className="projet-container"
            title="Site Gallérie"
            subtitle="Avec GSAP"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[6].source}
          />

          <ProjetItem
            className="projet-container reverse"
            title="VIDÉO STUDIO WEBSITE"
            subtitle="Avec React & Framer Motion"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[5].source}
          />
          <ProjetItem
            className="projet-container"
            title="Portfolio studio vidéo"
            subtitle="Avec React & Framer Motion"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[1].source}
          />

          <ProjetItem
            className="projet-container reverse"
            title="Formulaire de connexion"
            subtitle="Avec Adobe XD"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[3].source}
          />

          <ProjetItem
            className="projet-container"
            title="Maquette de Site ecommerce"
            subtitle="Avec Adobe XD"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[9].source}
          />

          <ProjetItem
            className="projet-container reverse"
            title="Site Portfolio"
            subtitle="Avec HTML & CSS"
            desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l'alcôve ovoïde, où les."
            image={imagesData[4].source}
          />
        </div>
      </motion.div>
    );
}

export default Projet
