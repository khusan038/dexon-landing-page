import { Divider } from "antd";
import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import aboutMainImg from "../../../../public/images/about-main.png";
import aboutPeopleImg from "../../../../public/images/about-peope.png";
import backgroundImg from "../../../../public/images/backgrund-about.jpg";
import { BsCheck2All } from "react-icons/bs";

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Title className="!text-mainColor !text-xl !m-0">About Us</Title>
          <Title className="!text-white !text-2xl md:!text-4xl font-bold  whitespace-pre-line !mt-2 ">
            {"Discover the Most Expertise \n of Our SEO Agency"}
          </Title>
          <Paragraph className="!text-[#7b7b7b] !text-[15px]  md:!text-[18px]">
            Ullamcorper risus ultrices risus lorem. Mollis libero in
            pellentesque potenti. Vulputate ut aliquam, consectetur turpis odio.
          </Paragraph>
          {data.map((item) => (
            <div className="flex items-center gap-4 mb-3 ">
              <BsCheck2All className="!text-[#bbf838]" />
              <Paragraph className="!text-[#7b7b7b] !m-0 !text-[15px] md:!text-[18px]">
                {item}
              </Paragraph>
            </div>
          ))}
          <Divider className="!bg-white opacity-10" />
          <div className="flex gap-5">
            <img src={aboutPeopleImg} className="h-[50px]" alt="notFound" />
            <Paragraph className="whitespace-pre-line !text-white !text-[15px] md:!text-[18px]">
              Al Over 3M+ People Trusted{"\n"} around the World.
            </Paragraph>
          </div>
        </div>
        <img className="w-[90%]" src={aboutMainImg} alt="" />
      </Container>
    </div>
  );
}
const data = [
  "Continually engineer ethical partnership",
  "Seamlessly pursue orthogonal customer service",
  "Dynamically reconceptualize value",
];

export default AboutUs;
