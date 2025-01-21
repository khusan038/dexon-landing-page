import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "@emotion/styled";

function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100); // 100px past scrolling, show the button
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollProgress
      onClick={handleScrollToTop}
      className="scroll-indicator"
      scrollProgress={scrollProgress}
      isVisible={isVisible}
    >
      <FaArrowUp />
    </ScrollProgress>
  );
}

const ScrollProgress = styled.div<{
  scrollProgress: number;
  isVisible: boolean;
}>`
  position: fixed;
  right: 50px;
  bottom: 20px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(187, 247, 55, 0.2);
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "15px")});
  transition: opacity 200ms linear, visibility 200ms linear,
    transform 200ms linear;

  /* Add the progress border effect */
  ::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 5px solid transparent; /* Border color */
    background: conic-gradient(
      #0d779b ${(props) => props.scrollProgress}%,
      transparent ${(props) => props.scrollProgress}%
    ); /* Circular fill based on scroll progress */
    z-index: 0; /* Behind the icon */
    transition: background 200ms linear; /* Smooth transition for the background */
  }

  ::after {
    position: absolute;
    content: "\f106";
    font-family: "Font Awesome 5 Free";
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    color: #ffde5d;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    font-weight: 900;
    z-index: 1;
    transition: all 200ms linear !important;
  }

  /* Add hover effect */
  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
  }
`;

export default ScrollIndicator;
