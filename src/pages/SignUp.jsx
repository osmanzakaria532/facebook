import { useState } from "react";
import Container from "../components/ui-layout/Container";
import Flex from "../components/ui-layout/Flex";

import Button from "../components/ui-layout/Button";

import { Link } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";

import img_1 from "../../src/assets/images/biz_illustration.png";
import img_2 from "../../src/assets/images/community_illustration.png";

const SignUp = () => {
  const pageContest = [
    {
      id: "1",
      image: img_1,
      head: "Business or brand",
      content:
        "Showcase your products and services, spotlight your brand and reach more customers on Facebook",
    },
    {
      id: "2",
      image: img_2,
      head: "Community or public figure",
      content:
        "Connect and share with people in your community, organisation, team, group or club.",
    },
  ];
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="bg-[#E9EBEE] pb-16">
        <div className="bg-[#3C5A99] py-6">
          <Container>
            <Flex className="items-center">
              <Flex className="items-start gap-3">
                <h1>
                  <Link
                    className="text-5xl text-white font-bold"
                    to="#"
                  >
                    facebook
                  </Link>
                </h1>
                <div className="mt-1.5">
                  <Button
                    className="bg-[#42b72a] hover:bg-[#36A420] text-white"
                    href="/RegistrationForm"
                  >
                    sign up
                  </Button>
                </div>
              </Flex>
              <div className="text-white relative">
                <Flex
                  className="mr-2 items-center"
                  onClick={() => setShow(!show)}
                >
                  <Link className="mr-1 text-sm">
                    Join or log in to Facebook
                  </Link>
                  <IoMdArrowDropdown className="cursor-pointer" />
                </Flex>
                <div
                  className={`absolute z-[999999] right-0 top-8 transition-all duration-300 transform ${
                    show
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-4 pointer-events-none"
                  }`}
                >
                  {show && (
                    <div className="">
                      <div className="w-[260px] bg-white relative p-3">
                        <div className="absolute bg-white w-3 h-3 right-[10px] -top-[5px] rotate-45"></div>

                        <div>
                          <label
                            htmlFor="name"
                            className="text-sm text-[#606770] font-semibold "
                          >
                            Email or phone
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full border border-[#d4d4d4]"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="password"
                            className="text-sm text-[#606770] font-semibold "
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            id="password"
                            className="w-full border border-[#d4d4d4]"
                          />
                        </div>
                        <div className="flex justify-end mb-4">
                          <Link
                            to="/findaccount"
                            className="hover:underline text-[#385898] text-[12px]"
                          >
                            Forgotten account?
                          </Link>
                        </div>
                        <div className="text-center">
                          <Button className="bg-[#4267b2] text-white w-full">
                            log in
                          </Button>
                        </div>
                      </div>
                      <Flex className="bg-[#f5f6f7] py-6 flex-col items-center">
                        <p className="text-[12px] text-[#7f7f7f]">
                          Do you want to join Facebook?
                        </p>
                        <div className="mt-1.5">
                          <Button
                            className="bg-[#42b72a] hover:bg-[#36A420] text-white"
                            href="/RegistrationForm"
                          >
                            sign up
                          </Button>
                        </div>
                      </Flex>
                    </div>
                  )}
                </div>
              </div>
            </Flex>
          </Container>
        </div>
        <div className="mt-10 fixed w-full">
          <Container>
            <h2 className="text-3xl font-bold text-[#1c1e21] mb-2">
              Create a Page
            </h2>
            <p className="text-[#1C1E21] text-sm">
              Connect your business, yourself or your cause to the worldwide
              community of people on Facebook. To get started, choose a Page
              category.
            </p>
          </Container>
        </div>
        <div className="relative z-50">
          <Container>
            <Flex className="mt-36 gap-5">
              {pageContest.map((item) => (
                <div
                  className="bg-white text-center p-6 w-[485px] rounded-sm"
                  key={item.id}
                >
                  <div className="flex justify-center mb-10">
                    <img
                      className=""
                      src={item.image}
                      alt={item.head}
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-4">{item.head}</h2>
                  <p className="mb-24 text-[#90949c] text-sm">{item.content}</p>
                  <div className="disabled:bg-gray-400">
                    <Button className="bg-gray-200">Get Start</Button>
                  </div>
                </div>
              ))}
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default SignUp;
