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
    <SectionTitle>Technology Solutions</SectionTitle>
    <SectionText>
      <span>
        At Effortless, we strive to revolutionize small-scale farming and
        enhance food security in North Eastern Africa and beyond through
        innovative and sustainable mobile farming solutions. Our commitment is
        to empower local communities by providing them with advanced,
        eco-friendly agricultural technologies that increase crop yields, reduce
        water waste, and promote a more resilient future. -{" "}
      </span>
      {""}
      <span style={{ color: "#B2D8B2" }}>
        At the heart of Effortless, our core values guide our actions and shape
        our approach to transforming agriculture and improving food security. We
        are committed to innovation, continuously developing cutting-edge
        technologies and solutions that revolutionize agriculture and enhance
        food security. Sustainability is our priority, as we focus on
        environmentally conscious practices to create lasting, positive impacts
        on communities and ecosystems. We believe in empowerment, supporting
        local farmers and communities by providing the tools and knowledge
        needed for self-sufficient, sustainable agriculture.
      </span>{" "}
      Collaboration drives our success, fostering strong partnerships with
      stakeholders, local communities, and our dedicated team to achieve shared
      goals. Finally, we embrace adaptability, responding to the evolving
      challenges faced by farmers and communities to provide timely and
      effective solutions.
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
