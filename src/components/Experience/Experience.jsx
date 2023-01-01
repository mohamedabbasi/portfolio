import React from "react";
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
  Img,
} from "../Experience/ExperienceStyles";

const Experience = () => (
  <Section nopadding id="experience">
    <br />
    <br />
    <SectionDivider />
    <SectionTitle main>Work Experience</SectionTitle>
    <SectionText>
      Landing my first two co-op positions was a challenging and rewarding
      experience as I had the chance to view the world of software development
      from a different perspective. These roles were unique because they didn't
      feel like an internship or a temporary position; I felt like a valuable
      member of a committed team that consistently delivers high-quality
      products. Working with the front-end team in both companies was a
      wonderful opportunity that allowed me to tap into my creativity when it
      came to designing web pages and building type-safe applications. Since
      working in an agile environment is not often taught at universities, this
      experience was a great way for me to discover the value of teamwork and
      collaboration. As a co-op student, my day-to-day activities included
      participating in daily standups with the team, prioritizing my work
      tickets, and writing secure and transferable code.
    </SectionText>
    <List>
      <ListItem>
        <Img src="/images/5.png" />
        <ListContainer>
          <ListTitle>IMRSV Data Labs</ListTitle>
          <ListParagraph>
            At IMRSV, I was part of the front-end development team and had the
            opportunity to work on a variety of tasks and take on many
            responsibilities. This gave me a chance to develop my skills and
            make a meaningful contribution to the company's flagship product,
            Anvil Crucible. I used: Typescript to write type safe programs, git
            for collaboration and code reviews, docker for running containerized
            applications and swagger for designing, building, and documenting
            APIs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/6.svg" />
        <ListContainer>
          <ListTitle>Getit Technologies</ListTitle>
          <ListParagraph>
            Choosing to work at a startup for my first co-op was an excellent
            decision as I learnt how to be a team player and how my work could
            affect our customers. I was trusted with crucial work that would
            benefit thousands of users. My role at Getit was to develop and
            update software to improve customer experience and reach the
            software's potential. I learned several new skills such as React,
            mongoDB, and Android Studio.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Experience;
