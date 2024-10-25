import styled from "@emotion/styled";
export const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-size: 16px;
  padding: 12px 38px 15px;
  background: #101210;
  color: #fff;
  font-weight: 500;
  display: inline-block;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  background: linear-gradient(90deg, #bbf737 0%, #ffee62 100%);
  color: #101210;

  ::before {
    position: absolute;
    content: "";
    display: block; /* Ko'rinishi uchun */
    z-index: -1; /* Tugma ostida fon ko'rinishida */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: #ffde5d;
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scale(1); /* Hoverda fon butun tugmani qoplaydi */
  }
`;
