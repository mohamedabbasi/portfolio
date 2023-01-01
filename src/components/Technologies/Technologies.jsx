import React from "react";
import { DiFirebase, DiReact, DiMsqlServer, DiPython } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents/Section";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  SectionText,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section nopadding id="tech">
    <br />
    <br />
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have a diverse skill set and work experience with various technologies
      and frameworks, including front-end design and back-end development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="48px" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>HTML/CSS & Typescript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="48px" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Node, django & mongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMsqlServer size="48px" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>Docker, git & confluence</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="48px" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>Flask, pandas & selenium</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
