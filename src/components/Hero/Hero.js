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
            the home of innovative and sustainable mobile irrigation systems.
            We're on a mission to transform small scale farming and improve food
            security in North Eastern Africa and beyond. Our automated
            irrigation system ensures consistent and timely watering for crops,
            while being customizable to meet the unique needs of your plants and
            soil. With our technology, our goal is to increase crop yields,
            reduce water waste, and promote sustainable farming practices for
            everyone.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
