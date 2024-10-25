import styled from "@emotion/styled";

export const StyledCard = styled.div`
  position: relative;
 
  ::after {
    position: absolute;
    content: "";
    border-left: 1px solid rgba(187, 248, 56, 0.5);
    border-right: 1px solid rgba(187, 248, 56, 0.5);
    transform: scale(1, 0);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    border-radius: 5px;
  }

  ::before {
    position: absolute;
    content: "";
    border-top: 1px solid rgba(187, 248, 56, 0.5);
    border-bottom: 1px solid rgba(187, 248, 56, 0.5);
    transform: scale(0, 1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    border-radius: 5px;
  }

  &:hover::after {
    transform: scaleY(1); /* Expand vertically on hover */
  }

  &:hover::before {
    transform: scaleX(1); /* Expand horizontally on hover */
  }
`;
