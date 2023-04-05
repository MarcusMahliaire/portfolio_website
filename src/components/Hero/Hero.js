import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <div>
          <SectionTitle main center>
            Welcome To <br />
            Effortless
          </SectionTitle>

          <SectionText>
            where we are committed to bringing sustainable agriculture to all
            communities. Our robotic farming technologies are designed to
            revolutionize the industry and enhance food security, while
            minimizing environmental impact.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
