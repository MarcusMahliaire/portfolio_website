import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      background: "#333333",
      height: "8rem",
    }}
  >
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/images/BigLeafLogo.png"
            alt="logo"
            style={{
              maxWidth: "60%",
              height: "auto",
              marginTop: "-2rem",
              marginLeft: "2rem",
            }}
          />{" "}
          <span style={{ marginTop: "-2rem" }}>Effortless</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: "1rem" }}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3
      style={{
        marginRight: "7rem",
      }}
    >
      {/* <SocialIcons href="https://google.com">
        <AiFillGithub size="3rem" />
      </SocialIcons> */}
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
