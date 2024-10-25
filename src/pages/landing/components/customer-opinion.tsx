import { Rate, Space } from "antd";
import backgroundImg from "../../../../public/images/backgournd-customer-opinion.jpg";
import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import { StyledCard } from "../../../components/styled-card";
import { StyledButton } from "../../../components/styled-button";
function CustomerOpinion() {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <Container className="py-[100px]">
        <Title className="!text-[#bbf838] !text-xl !m-0">Testimonial</Title>
        <Title className="!text-white !text-2xl md:!text-4xl font-bold  whitespace-pre-line !mt-2 ">
          {"What Say Our Customers \n About Dexon"}
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[50px]">
          {data.map((item, index) => (
            <StyledCard
              key={index}
              className="rounded-xl p-7 bg-gradient-to-t from-[rgba(187,247,55,0)] to-[rgba(187,247,55,0.058823529411764705)]"
            >
              <div className="flex items-center justify-between mb-5">
                <Space size={"large"}>
                  <img
                    src="https://html.ditsolution.net/dexon/assets/images/resource/testi.png"
                    className="rounded-xl w-[80px] h-[80px]"
                    alt="notFound"
                  />
                  <div className="flex flex-col justify-center">
                    <Title level={3} className="!m-0 !mb-2 !text-white">
                      {item.userName}
                    </Title>
                    <Paragraph className="!text-[18px] !m-0 !text-[#7b7b7b]">
                      {item.userJob}
                    </Paragraph>
                  </div>
                </Space>
                <Rate
                  className="hidden sm:block"
                  defaultValue={item.rate ? item.rate : 5}
                />
              </div>

              <Paragraph className="!text-[18px] !text-white">
                {item.opinion}
              </Paragraph>
            </StyledCard>
          ))}
        </div>
        <Title className="!text-white text-center !mt-[40px] !text-2xl md:!text-4xl font-bold  whitespace-pre-line ">
          {`Are you excited to start Next \n SEO Campaign?`}
        </Title>
        <div className="flex justify-center">
          <StyledButton className="">Get Startee</StyledButton>
        </div>
      </Container>
    </div>
  );
}
const data = [
  {
    userImg: "",
    userName: "Anna Maria",
    userJob: "Marketolog",
    opinion: `“Rapidiously generate flexible best practices and business internal or "organic" sources. Progressively strategize client centered convergence via done”`,
    rate: 5,
  },
  {
    userImg: "",
    userName: "Tom Holland",
    userJob: "Marketolog",
    opinion: `“Rapidiously generate flexible best practices and business internal or "organic" sources. Progressively strategize client centered convergence via done”`,
    rate: 4,
  },
];

export default CustomerOpinion;
