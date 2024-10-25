import React, { useEffect } from "react";
import "../../../styles/infinite-scoll.css";
import Container from "../../../components/container";
import { Paragraph } from "../../../components/typography";

const InfiniteScoll: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    }
  }, []);

  return (
    <div className="bg-[#1C1F1C]">
      <Container>
        <div className="scroller" data-speed="fast" data-direction="left">
          <div className="py-8 scroller__inner">
            {data.map((item, index) => (
              <Paragraph
                key={index}
                className="text-[20px] text-white font-bold opacity-15 uppercase !mb-0 px-[40px]"
              >
                {item}
              </Paragraph>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
const data = [
  "seo agency",
  "marketing",
  "paid campigen",
  "sales increase",
  "strategy",
  "development",
  "branding",
];

export default InfiniteScoll;
