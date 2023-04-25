import React from "react";
import { DiFirebase, DiReact, DiZend, DiCoda } from "react-icons/di";
import { FiCloudDrizzle, FiPower } from "react-icons/fi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      At Effortless, we understand that the key to successful farming lies in
      the precise management of crops and soil. Our innovative mobile irrigation
      system leverages the latest advances in robotics and automation to ensure
      timely and consistent watering of plants, while taking into account
      factors such as soil composition and plant needs. By using our technology,
      we can increase crop yields, reduce water waste, and promote sustainable
      farming practices. Additionally, our system allows farmers to focus on
      higher-level decision making and strategic planning, freeing up time and
      resources to better serve communities in food desert areas and combat food
      insecurity. With your support, we're looking to expand our technology into
      other areas of farming, creating a comprehensive suite of sustainable and
      scalable solutions. Join us in revolutionizing small scale farming and
      making life easier for farmers and communities alike.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FiCloudDrizzle size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automated Watering</ListTitle>
          <ListParagraph>
            Locomotive watering <br />
            System
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCoda size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automated Planting</ListTitle>
          <ListParagraph>
            Self rolling <br />
            seed planter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FiPower size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automated Harvesting</ListTitle>
          <ListParagraph>
            To be <br />
            Explored...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
