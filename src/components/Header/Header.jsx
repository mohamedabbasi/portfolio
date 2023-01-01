import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiTerminalBadge } from "react-icons/di";
import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "16px",
          }}
        >
          <DiTerminalBadge size="40px" /> <Span>Mohamed's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/images/resume.pdf">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mohamedabbasi">
        <AiFillGithub size="40px" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mohamed-abbasi/">
        <AiFillLinkedin size="40px" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
