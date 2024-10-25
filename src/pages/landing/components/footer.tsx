import { Button, Divider, Input, Space } from "antd";
import Container from "../../../components/container";
import { Paragraph } from "../../../components/typography";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#101210]">
      <Container className="py-[100px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <ul className="!text-[#7b7b7b]">
              <li>
                <img
                  className="mb-5"
                  src="https://html.ditsolution.net/dexon/assets/images/logo2.png"
                  alt="logo"
                />
              </li>
              <li>
                Ullamcorper risus ultrices in lorem. Vulputate aliquam, consecte
                error free scenarios done.
              </li>
              <li>
                <Space className="mt-3">
                  {socialIcons.map((item, index) => (
                    <Button
                      className="text-white hover:!text-[#bbf838]  bg-transparent border-none bg-opacity-80 hover:!bg-transparent"
                      key={index}
                      icon={item}
                    ></Button>
                  ))}
                </Space>
              </li>
            </ul>
          </div>
          <div>
            <Paragraph className="font-bold text-white uppercase">
              Informations
            </Paragraph>
            <ul className="!text-[#7b7b7b] flex flex-col gap-1">
              <li>About Company</li>
              <li>Letest Work</li>
              <li>Track order</li>
              <li>Letest Work</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <Paragraph className="font-bold text-white uppercase">
              Contact Us
            </Paragraph>
            <ul className="!text-[#7b7b7b] !pe-[40px] flex flex-col gap-1">
              <li>Royels, Street Road 27, New York, USA - 87453</li>
              <li>example@gmail.com</li>
              <li>+98 069 (2350) 020</li>
            </ul>
          </div>
          <div>
            <Paragraph className="font-bold text-white uppercase">
              NewsLetter
            </Paragraph>
            <ul className="!text-[#7b7b7b]  !pe-[40px] ">
              <li>
                <Space.Compact>
                  <Input
                    placeholder="Search Here"
                    size="large"
                    className=" !rounded-sm !border-[#ffee62] !text-white !bg-transparent mb-5"
                  ></Input>
                  <Button
                    size="large"
                    className="rounded-sm  bg-gradient-to-r from-[#bbf737] to-[#ffee62] hover:!text-[#ffee62]  hover:!border-[#ffee62] hover:!bg-transparent"
                  >
                    Submit
                  </Button>
                </Space.Compact>
              </li>
              <li>
                When do they work well, and when do they on us and finally,
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Divider className="bg-white !m-0 opacity-10" />
      <Container className="flex justify-between py-5">
        <Paragraph className="text-[18px] !text-[#7b7b7b] !m-0">
          2023 - 2030 | Alrights reserved by Dream IT
        </Paragraph>
      </Container>
    </div>
  );
}
const socialIcons = [
  <FaFacebookF />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaYoutube />,
];

export default Footer;
