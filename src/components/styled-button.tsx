import styled from "@emotion/styled";
export const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-size: 16px;
  padding: 10px 30px;
  color: #fff;
  font-weight: 500;
  display: inline-block;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.5s;

  ::before {
    position: absolute;
    content: "";
    display: block;
    z-index: -1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: linear-gradient(90deg, #0d779b 0%, #0b5f7a 100%);
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scale(1);
  }
`;
