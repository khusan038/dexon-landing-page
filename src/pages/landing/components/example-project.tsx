import { MdArrowForward } from "react-icons/md";
import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import styled from "@emotion/styled";

function ExampleProject() {
  return (
    <div className="bg-[#101210]">
      <Container className=" py-[100px]">
        <Title className="!text-white text-center !text-2xl whitespace-pre-line md:!text-4xl !mt-0 !font-bold">
          What are the Gains you Receive {"\n"} Every SEO Campaign?
        </Title>
        <Paragraph className="text-white text-center w-[90%] md:w-[70%] lg:w-[35%] mx-auto pt-5 !text-lg">
          {
            "Distinctively supply exceptional services after uniquely integrate alternative markets rather emerging initiatives."
          }
        </Paragraph>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3  mt-[50px]">
          {data.map((item, index) => (
            <StyledCard
              key={index}
              className={`!justify-center group ${
                item.span ? `col-span-${item.span}` : "col-span-1"
              } `}
            >
              <img className="w-full rounded-xl" src={item.img} alt="" />
              <div className="hidden group-hover:block project-content">
                <Title level={3}>Campaign</Title>
                <Title level={2} className="!mt-0 font-bold">
                  SEO Consulting
                </Title>
                <Paragraph className="flex justify-center mb-0 !text-[40px] text-opacity-10">
                  <MdArrowForward className="!rotate-45" />
                </Paragraph>
              </div>
            </StyledCard>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ExampleProject;
const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  z-index: 1;

  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(0deg, #ffef6a 0%, #bef741 100%);
    opacity: 0.95;
    transition: height 0.5s;
    border-radius: 10px;
  }

  &:hover::before {
    height: 100%;
  }
  .project-content {
    position: absolute;
    z-index: 1;
    top: 36%;
    left: 0;
    right: 0;
    text-align: center;
    transition: 0.5s;
  }
`;

const data = [
  {
    img: "https://html.ditsolution.net/dexon/assets/images/resource/pr1.jpg",
    span: 2,
  },
  { img: "https://html.ditsolution.net/dexon/assets/images/resource/pr2.jpg" },
  { img: "https://html.ditsolution.net/dexon/assets/images/resource/pr3.jpg" },
  { img: "https://html.ditsolution.net/dexon/assets/images/resource/pr4.jpg" },
  { img: "https://html.ditsolution.net/dexon/assets/images/resource/pr5.png" },
];
