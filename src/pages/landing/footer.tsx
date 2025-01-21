import { Button, Divider, Input, Space } from "antd";
import Container from "../../../components/container";
import { Paragraph } from "../../../components/typography";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#101210]">
      <Container className="py-[100px]">
        <div className="grid grid-cols-1 gap-7 md:gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ul className="!text-[#7b7b7b]">
              <li>
                <img
                  className="mb-5"
                  src="https://html.ditsolution.net/dexon/assets/images/logo2.png"
                  alt="logo"
                />
              </li>
              <li className="font-semibold">
                Ullamcorper risus ultrices in lorem. Vulputate aliquam, consecte
                error free scenarios done.
              </li>
              <li>
                <Space className="mt-3" size={"middle"}>
                  {socialIcons.map((item, index) => (
                    <Button
                      className="text-white hover:!text-mainColor   bg-transparent border-none bg-opacity-80 hover:!bg-transparent"
                      key={index}
                      icon={item.icon}
                    ></Button>
                  ))}
                </Space>
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className={ulHeaderStyle}>Informations</Paragraph>
            <ul className="!text-[#7b7b7b] flex flex-col gap-2">
              <li>
                <Link to={"./"} className={ulListStyle}>
                  About Company
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  Letest Work
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  Track order
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  Letest Work
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className={ulHeaderStyle}>Contact Us</Paragraph>
            <ul className="!text-[#7b7b7b] !pe-[40px] flex flex-col gap-2">
              <li>
                <Link to={"./"} className={ulListStyle}>
                  Royels, Street Road 27, New York, USA - 87453
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  example@gmail.com
                </Link>
              </li>
              <li>
                <Link to={"./"} className={ulListStyle}>
                  +98 069 (2350) 020
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className={ulHeaderStyle}>NewsLetter</Paragraph>
            <ul className="!text-[#7b7b7b]  !pe-[40px] ">
              <li>
                <Space.Compact>
                  <Input
                    placeholder="Search Here"
                    size="large"
                    className=" !rounded-sm !border-mainColor text-white !bg-transparent mb-5"
                  />
                  <Button
                    size="large"
                    className="rounded-sm text-white bg-mainColor hover:!bg-opacity-85 hover:!text-white font-bold hover:!bg-mainColor border-none"
                  >
                    Submit
                  </Button>
                </Space.Compact>
              </li>
              <li className="font-semibold">
                When do they work well, and when do they on us and finally,
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Divider className="bg-white !m-0 opacity-10" />
      <Container className="flex justify-between py-5">
        <Paragraph className="md:text-[18px] !text-textColor !m-0">
          2023 - 2030 | Alrights reserved by Dream IT
        </Paragraph>
      </Container>
    </div>
  );
}
const socialIcons = [
  { icon: <FaFacebookF />, link: "" },
  { icon: <FaInstagram />, link: "" },
  { icon: <FaXTwitter />, link: "" },
  { icon: <FaYoutube />, link: "" },
];
const ulHeaderStyle = "font-bold !text-[18px] text-white uppercase";
const ulListStyle =
  "cursor-pointer hover:text-mainColor transition-colors duration-400 ease-in-out font-semibold";

export default Footer;
