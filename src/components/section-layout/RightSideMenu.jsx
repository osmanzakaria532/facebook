import { Link } from "react-router-dom";

import { BsThreeDots } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

import p_images from "../../../src/assets/images/p_img.jpg";
import p_images_2 from "../../../src/assets/images/p_img_2.jpg";
import Button from "../ui-layout/Button";
import Flex from "../ui-layout/Flex";

const RightSideMenu = () => {
  return (
    <>
      <div className="w-[270px] py-3 overflow-x-hidden">
        <ul>
          {/* Friend Request Section */}
          <li className="mb-2.5">
            <div className="">
              <Flex className="items-center">
                <h3 className="text-white/80 font-semibold">Friend requests</h3>
                <button className="text-blue-600 cursor-pointer hover:bg-[#4E5051] inline-block py-1 px-3 rounded-sm">
                  See all
                </button>
              </Flex>
              <Link className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-md gap-3">
                  <div className="w-12">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="*:my-1.5 *:first:mt-0 *:last:mb-0">
                    <Flex className="gap-3 text-white/80 text-sm items-start">
                      <h2 className="font-semibold ">Muhammad Bin Osman</h2>
                      <span className="font-light">2d</span>
                    </Flex>
                    <Flex className="!justify-start items-center gap-1">
                      <Flex className="">
                        <Link className="!z-[999]">
                          <div className="w-4 h-4 rounded-full overflow-hidden">
                            <img
                              src={p_images}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                        <Link className="-ml-1">
                          <div className="w-4 h-4 rounded-full overflow-hidden">
                            <img
                              src={p_images_2}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Link>
                      </Flex>
                      <p className="text-white/80 text-sm">2 mutual friends</p>
                    </Flex>
                    <Flex className="gap-3 ">
                      <div className="!w-1/2">
                        <Button className="bg-[#2176FF] text-white py-2 !px-5 !rounded-md">
                          confirm
                        </Button>
                      </div>
                      <div className="!w-1/2">
                        <Button className="bg-[#474748] text-white py-2 !px-5 !rounded-md">
                          delete
                        </Button>
                      </div>
                    </Flex>
                  </div>
                </Flex>
              </Link>
            </div>
          </li>
          {/* BirthDay Section */}
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1 text-white/70">
              <h2 className="font-semibold">Birthdays</h2>
              <div className="hover:bg-[#333334] py-2 px-4 rounded-md mt-1">
                <Flex className="!justify-start items-center gap-2">
                  <div className="">
                    <FaGift className="text-2xl" />
                  </div>
                  <div className="text-[13px]">
                    <p className="font-semibold">Mohammed Osman and 2 others</p>
                    <p>have birthday today</p>
                  </div>
                </Flex>
              </div>
            </div>
            <Link></Link>
          </li>
          {/* Contact Section */}
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1 text-white/70 font-semibold">
              <Flex className="items-center">
                <h2>Contacts</h2>
                <Flex className="items-center gap-2">
                  <Link>
                    <div className="hover:bg-[#333334] p-2 rounded-full">
                      <IoMdSearch className="text-xl" />
                    </div>
                  </Link>
                  <Link>
                    <div className="hover:bg-[#333334] p-2 rounded-full">
                      <BsThreeDots className="text-xl" />
                    </div>
                  </Link>
                </Flex>
              </Flex>
            </div>
            <Link>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Muhammad Bin Osman</h2>
                  </div>
                </Flex>
              </div>
            </Link>
          </li>
          {/* GroupChat Section */}
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1 text-white/70 font-semibold">
              Group chats
            </div>
            <Link>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Group - 1</h2>
                  </div>
                </Flex>
              </div>
            </Link>
            <Link>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Group - 2</h2>
                  </div>
                </Flex>
              </div>
            </Link>
            <Link>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="w-7">
                    <img
                      src={p_images}
                      alt=""
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Group - 3</h2>
                  </div>
                </Flex>
              </div>
            </Link>
            <Link>
              <div className="">
                <Flex className="hover:bg-[#333334] py-2 px-4 rounded-xl mt-1 !justify-start items-center gap-2">
                  <div className="bg-[#1c1c1e]/70 p-2 rounded-full">
                    <FaPlus className="text-white" />
                  </div>
                  <div className="text-white/80 text-[13px] font-semibold">
                    <h2>Create Group Chats</h2>
                  </div>
                </Flex>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightSideMenu;
