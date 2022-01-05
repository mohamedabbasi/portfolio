import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My Portfolio!
        </SectionTitle>
        <SectionText>
          Hello, my name is Mohamed Abbasi and I'm a second-year undergraduate student at Carleton University majoring in Computer Science with a minor in Mathematics. I'm currently looking for a Co-op position for the Summer & Fall 2022 terms.
        </SectionText>
        <Button onClick={() => window.location = "https://www.linkedin.com/in/mohamed-abbasi/"}>LinkedIn Profile</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
