import { Button, Drawer } from "antd";
import Container from "../../../components/container";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";

import { Paragraph } from "../../../components/typography";

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
    if (window.scrollY > 50) {
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
            "bg-[#101210]": isScrolled,
          }
        )}`}
      >
        <Container className="flex items-center justify-between py-5">
          <img
            className="mb-5 translate-y-2"
            src="https://html.ditsolution.net/dexon/assets/images/logo2.png"
            alt="logo"
          />
          <div className="hidden md:flex gap-7 md:">
            {menu.map((item, index) => (
              <Paragraph
                key={index}
                className="capitalize !m-0 text-[18px] text-white cursor-pointer "
              >
                {item.title}
              </Paragraph>
            ))}
          </div>
          <Button
            size="large"
            className="bg-transparent border-2 md:block hidden text-white hover:!bg-transparent hover:!border-yellow-200 hover:!text-yellow-500 !rounded-sm border-white border-solid hover:!bg-white hover:bg-opacity-10 border-opacity-10 "
          >
            exampleButton
          </Button>
          <Paragraph
            onClick={showDrawer}
            className="bloack md:hidden text-[20px] !m-0 cursor-pointer !text-white"
          >
            <FaBars />
          </Paragraph>
        </Container>
      </header>
      <Drawer
        className="!bg-dark"
        title="Menu"
        width={300}
        onClose={onClose}
        open={open}
      >
        {menu.map((item, index) => (
          <Paragraph
            key={index}
            className="capitalize !m-0 text-[18px] text-white cursor-pointer "
          >
            {item.title}
          </Paragraph>
        ))}
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
