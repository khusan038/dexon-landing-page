import Container from "@components/container";
import { Paragraph, Title } from "@components/typography";
import styled from "@emotion/styled";
import offer1Img from "@assets/images/offer-1.png";
import offer2Img from "@assets/images/offer-2.png";
import offer3Img from "@assets/images/offer-3.png";
import offer4Img from "@assets/images/offer-4.png";
import offer5Img from "@assets/images/offer-5.png";
import offer6Img from "@assets/images/offer-6.png";
import backgroundImg from "@assets/images/background-offers.jpg";
import { Divider } from "antd";

function Offers() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="text-center pt-[50px]">
        <Title className="!text-white !text-2xl md:!text-4xl !mt-0 !font-bold">
          What are the Gains you Receive
        </Title>
        <Title className="!text-white !text-2xl md:!text-4xl !mt-0 !font-bold">
          Every SEO Campaign?
        </Title>
        <Paragraph className="text-white w-[90%] md:w-[70%] lg:w-[35%] mx-auto pt-5 !text-lg">
          {
            "Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives."
          }
        </Paragraph>
        <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3 pb-[80px]">
          {data.map((item, index) => (
            <StyledCard
              style={{
                filter: "drop-shadow(0px 5px 15px rgba(215, 215, 217, 0.3))",
              }}
              key={index}
              className="flex rounded-xl  px-[40px] bg-gradient-to-t from-[rgba(187,247,55,0)] to-[rgba(187,247,55,0.058823529411764705)] flex-col md:px-[60px] items-center justify-between p-5"
            >
              <img className="w-[70px]" src={item.img} alt="" />
              <div>
                <Title className="!text-white !text-2xl py-5">
                  {item.title}
                </Title>
                <Paragraph className="text-xl !text-[#7b7b7b] !mb-6">
                  {item.desc}
                </Paragraph>
              </div>
            </StyledCard>
          ))}
        </div>
        <Divider className="border-white opacity-10 !m-0 " />
      </Container>
    </div>
  );
}

export default Offers;
const StyledCard = styled.div`
  position: relative;
  filter: drop-shadow(0px 5px 15px rgba(215, 215, 217, 0.3));

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

const data = [
  {
    img: offer1Img,
    title: "Analize Competetion",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
  {
    img: offer2Img,
    title: "Focus on Revelanse",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
  {
    img: offer3Img,
    title: "Video Boosting",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
  {
    img: offer4Img,
    title: "Regular Updates",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
  {
    img: offer5Img,
    title: "Improved Reports",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
  {
    img: offer6Img,
    title: "Paid Marketing",
    desc: "Monotonectally foster principles supply chains visvis sustainables items energistically",
  },
];
