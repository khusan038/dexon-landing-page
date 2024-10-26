import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import image from "../../../../public/images/banner.png";
import backgraound from "../../../../public/images/background-banner.jpg";
import { Button } from "antd";

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
            <Title className=" !text-4xl sm:!text-5xl md:!text-6xl !mb-2 !text-white whitespace-pre-line">
              Start Achieving {"\n"} Your Short Term{"\n"} SEO Goals
            </Title>
            <Paragraph
              type="secondary"
              className="text-[18px] py-5 !m-0 !text-[#7b7b7b]"
            >
              Distinctively supply exceptional services after uniquely integrate
              alternative markets rather emerging initiatives.
            </Paragraph>
            <Button className={buttonStyled}>Get Started</Button>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </Container>
    </div>
  );
}

export default Banner;
export const buttonStyled =
  "rounded-lg px-[40px] h-[50px] text-lg hover:scale-105 duration-300 bg-gradient-to-tr font-semibold !text-white from-[#085269] border-none to-[#5ABBD2] hover:!bg-gradient-to-tl";
