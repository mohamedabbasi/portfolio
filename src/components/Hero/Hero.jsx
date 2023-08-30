import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents/Section";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Portfolio!
      </SectionTitle>
      <SectionText>
        Greetings, my name is Mohamed Abbasi and I'm a third-year undergraduate
        student at Carleton University majoring in Computer Science with a minor
        in Mathematics. I'm currently looking for a co-op position for Winter
        2024
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/mohamed-abbasi/")
        }
      >
        LinkedIn Profile
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
