import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My Portfolio!
        </SectionTitle>
        <SectionText>
          Greetings, my name is Mohamed Abbasi and I'm a third-year undergraduate student at Carleton University majoring in Computer Science with a minor in Mathematics. I'm currently completing a 4-month co-op term at Getit Technologies to gain exposure of developing full-stack mobile and web applications. I'm also looking for a Co-op position for the Fall 2022 term.
        </SectionText>
        <Button onClick={() => window.location = "https://www.linkedin.com/in/mohamed-abbasi/"}>LinkedIn Profile</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
