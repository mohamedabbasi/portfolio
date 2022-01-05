import React from 'react';
import { DiFirebase, DiReact, DiJava, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Sectiontext } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <br/><br/><br/>
    <SectionDivider/>
    <SectionTitle main>Technologies</SectionTitle>
    <Sectiontext>
      I've worked with a range of technologies & languages. Including front-end design, procedural and Object-oriented programming languages.
      Here are some of the courses I've taken at Carleton University: <br/>
      Computer Science | Web Development | Systems Programming | Statistical Modelling | Discrete Mathematics  
      These courses improved my technical and analytical skills, which gave me the opportunity to have hands on experience with:
    </Sectiontext>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/> React.js & NEXT.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/> Node.js & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Experience with <br/> Data Structures & Algorithms
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br/> Flask, pandas, Matplotlib & BeautifulSoup
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
