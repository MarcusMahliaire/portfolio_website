import styled from "styled-components";

export const Image = styled.img`
  display: block;
  max-width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;
