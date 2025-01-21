import { Drawer } from "antd";
import Container from "../../../components/container";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { Paragraph } from "../../../components/typography";
import { StyledButton } from "../../../components/styled-button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`border-b-[1px] border-solid border-white border-opacity-10 fixed w-full top-0 z-50 transition-colors duration-400 ease-in-out ${clsx(
          {
            "bg-bgBlack": isScrolled,
          }
        )}`}
      >
        <Container className="flex items-center justify-between py-4 md:py-5">
          <img
            className="mb-5 translate-y-2"
            src="https://html.ditsolution.net/dexon/assets/images/logo2.png"
            alt="logo"
          />
          <div className="hidden lg:flex gap-7">
            {menu.map((item, index) => (
              <Paragraph
                key={index}
                className="capitalize !m-0 text-[18px] text-white cursor-pointer "
              >
                {item.title}
              </Paragraph>
            ))}
          </div>
          <StyledButton className="!hidden lg:!block">
            exampleButton
          </StyledButton>
          <Paragraph
            onClick={showDrawer}
            className="bloack lg:hidden text-[20px] !m-0 pe-2 cursor-pointer !text-white"
          >
            <FaBars />
          </Paragraph>
        </Container>
      </header>
      <Drawer
        title="Menu"
        width={300}
        onClose={onClose}
        open={open}
        style={{ backgroundColor: "#000", color: "#fff" }}
        closeIcon={
          <span style={{ color: "white", fontSize: "20px", marginTop: "3px" }}>
            <IoClose />
          </span>
        }
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {menu.map((item, index) => (
              <Paragraph
                key={index}
                className="capitalize !m-0 !mb-4 text-[18px] text-white cursor-pointer "
              >
                {item.title}
              </Paragraph>
            ))}
          </div>
          <StyledButton className="">exampleButton</StyledButton>
        </div>
      </Drawer>
    </>
  );
}

const menu = [
  { title: "Home", path: "/" },
  { title: "About", path: "/" },
  { title: "Contact", path: "/" },
  { title: "Blog", path: "/" },
];

export default Header;
