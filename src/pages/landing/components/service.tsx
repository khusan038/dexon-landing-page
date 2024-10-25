import Container from "../../../components/container";
import { Paragraph, Title } from "../../../components/typography";
import mainImage from "../../../../public/images/service-main.png";
import { Button } from "antd";
import { MdArrowForward } from "react-icons/md";
import service1Img from "../../../../public/images/service-1.png";
import service2Img from "../../../../public/images/service-2.png";
import service3Img from "../../../../public/images/service-3.png";

function Service() {
  return (
    <div className="bg-[#101210]">
      <Container className="grid grid-cols-12 py-[100px] gap-7">
        <div className="col-span-12 lg:col-span-5">
          <Title level={3} className="!text-[#bbf838] !mb-6">
            Services
          </Title>
          <Title className="!text-white !text-3xl sm:!text-4xl !mt-0 !mb-2">
            SEO Solutions What
          </Title>
          <Title className="!text-white !text-3xl sm:!text-4xl  !mt-0">
            We Provide
          </Title>
        </div>
        <div className="flex justify-between col-span-12 pt-5 lg:col-span-7 pb-7 lg:pb-0 lg:pt-14">
          <Paragraph className="w-[70%]  text-[18px] !text-[#7b7b7b]">
            Ullamcorper risus ultrices risus lorem. Mollis libero in
            pellentesque Vulputate ut aliquam, consectetur turpis
          </Paragraph>
          <Button
            className="h-[80px] !min-w-[80px] aspect-square text-5xl bg-transparent  hover:!text-yellow-500 hover:!border-yellow-400  border-b-2 hover:!bg-transparent  text-white text-opacity-10 border-opacity-10 border-white border-solid "
            shape="circle"
          >
            <MdArrowForward className="!-rotate-45" />
          </Button>
        </div>
        <img
          src={mainImage}
          className="w-full lg:w-[90%] col-span-12 md:col-span-7 lg:col-span-5"
          alt="notFound"
        />
        <div className="col-span-12 lg:col-span-7">
          <div className="flex flex-col gap-5 mt-5 ">
            {cards.map((item, index) => (
              <div
                className={`group bg-gradient-to-r from-[rgba(187,247,55,0.07)] to-[rgba(187,247,55,0)] hover:bg-gradient-to-l flex items-center justify-between p-5 cursor-pointer sm:p-6 md:p-7 lg:p-8 rounded-2xl`}
                key={index}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-7 ">
                  <img
                    className="w-[40px] h-[40px] lg:mt-2"
                    src={item.img}
                    alt=""
                  />
                  <div>
                    <Title className="!text-white !text-3xl sm:!text-xl  lg:!text-3xl ">
                      {item.title}
                    </Title>
                    <Paragraph className=" sm:w-[75%] text-sm sm:text-sm md:text-lg !text-[#7b7b7b] ">
                      {item.desc}
                    </Paragraph>
                  </div>
                </div>
                <Paragraph className="hidden mb-0 text-5xl text-white transition-colors duration-300 ease-in-out group-hover:text-white text-opacity-10 sm:block">
                  <MdArrowForward className="!-rotate-45" />
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
const cards = [
  {
    img: service1Img,
    title: "Keyword Research",
    desc: "Allamcorper risus ultrices risus lorem vibero in pellentesque potenti more",
  },
  {
    img: service2Img,
    title: "Customer Campaign",
    desc: "Allamcorper risus ultrices risus lorem vibero in pellentesque potenti more",
  },
  {
    img: service3Img,
    title: "Social Boost",
    desc: "Allamcorper risus ultrices risus lorem vibero in pellentesque potenti more",
  },
];

export default Service;
