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
      As we work with robotic farming, we notice we are able to achieve more
      precise and efficient crop management, leading to improved yields and
      greater food security. Additionally, working with this technology allows
      us to focus on higher-level decision making and strategic planning for our
      farming operations.
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
