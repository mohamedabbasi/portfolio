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
      Securing my initial co-op placements was both rigorous and fulfilling, providing me a novel lens into the software development realm. These positions transcended the typical internship feel; I was embraced as an integral part of dedicated teams renowned for their premium product deliveries. Collaborating with the front-end units of both organizations was an invigorating experience, fueling my creative flair in web design and the development of type-safe applications. While university curricula rarely delve into agile frameworks, these roles offered me a firsthand appreciation of the essence of teamwork and synergy. Beyond the titles of an intern, my routine encompassed active participation in daily stand-ups, meticulous task prioritization, and crafting secure, modular code.
    </SectionText>
    <List>
    <ListItem>
        <Img src="/images/7.svg" />
        <ListContainer>
          <ListTitle>Environment Canada</ListTitle>
          <ListParagraph>
            At ECCC, I specialized in backend development, focusing on API design and server-side optimizations within the NPRI project. Using ASP.NET and C#, I delivered robust solutions. Collaboration was key, with weekly standups and in-person sessions fostering team synergy. Employing tools like Azure DevOps and Swagger, I navigated the scrum methodology from sprint planning to retrospectives, ensuring consistent growth and improvement.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/5.png" />
        <ListContainer>
          <ListTitle>IMRSV Data Labs</ListTitle>
          <ListParagraph>
            At IMRSV, I served on the front-end development team, undertaking a diverse range of tasks and assuming substantial responsibilities. This role afforded me the platform to hone my expertise and elevate my creativity. My toolset included: Typescript for ensuring type-safe programming, Git for collaborative development and thorough code reviews, Docker for executing containerized applications, and Swagger as a comprehensive solution for designing, constructing, and annotating APIs.
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
