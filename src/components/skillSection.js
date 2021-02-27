import React from 'react'

// Import component
import SkillCard from './skillCard'

//Import icons
import { ReactComponent as Pen } from "../assets/svg/pen.svg";
import { ReactComponent as Code } from "../assets/svg/code.svg";
import { ReactComponent as Braille } from "../assets/svg/braille.svg";

// Import framer-motion
// import {motion } from 'framer-motion'

const SkillSection = () => {
    return (
      <div className="skill-section">
        <SkillCard
          icon={<Pen />}
          title="ui ux design"
          desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge."
        />
        <SkillCard
          icon={<Code />}
          title="développement web"
          desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge."
        />
        <SkillCard
          icon={<Braille />}
          title="design d'identité "
          desc="Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge."
        />
      </div>
    );
}

export default SkillSection
