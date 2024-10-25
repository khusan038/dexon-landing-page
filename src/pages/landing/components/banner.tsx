import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import image from "../../../../public/images/banner.png";
import backgraound from "../../../../public/images/background-banner.jpg";
import styled from "@emotion/styled";

function Banner() {
  return (
    <div
      style={{
        background: `url(${backgraound}) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-2 pt-[100px]">
        <div className="flex flex-col justify-center">
          <div>
            <Title className=" !text-3xl sm:!text-5xl md:!text-6xl !mb-2 !text-white whitespace-pre-line">
              Start Achieving {"\n"} Your Short Term{"\n"} SEO Goals
            </Title>
            <Paragraph
              type="secondary"
              className="text-[18px] py-5 !m-0 !text-[#7b7b7b]"
            >
              Distinctively supply exceptional services after uniquely integrate
              alternative markets rather emerging initiatives.
            </Paragraph>
            <StyledButton>Get Started</StyledButton>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </Container>
    </div>
  );
}

const StyledButton = styled.button`
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
  margin-top: 38px;
  margin-left: 50px;
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
export default Banner;
