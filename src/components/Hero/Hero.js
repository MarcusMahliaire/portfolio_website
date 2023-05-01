import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
  HeroTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <div>
          <HeroTitle main center>
            Welcome To
            <br />
            <span>Effortless</span>
          </HeroTitle>

          <SectionText>
            <span style={{ color: "#B2D8B2" }}>
              The home of innovative and sustainable mobile farming solutions.
            </span>{" "}
            Our fleet of robots are designed to assist farmers in various
            aspects of agriculture, from{" "}
            <span style={{ color: "#B2D8B2" }}>
              automated irrigation systems that ensure consistent and timely
              watering for crops, to drones for crop monitoring and pest
              control.
            </span>{" "}
            At Effortless, our vision is to revolutionize the agricultural
            landscape by equipping farmers with the tools they need to overcome
            the challenges of{" "}
            <span style={{ color: "#B2D8B2" }}>climate change,</span>{" "}
            <span style={{ color: "#B2D8B2" }}>food scarcity,</span> and{" "}
            <span style={{ color: "#B2D8B2" }}>environmental degradation.</span>
          </SectionText>
          <Button
            target="_blank"
            onClick={() => (window.location = "https://gofund.me/d0a0d2b3")}
          >
            Learn More
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
