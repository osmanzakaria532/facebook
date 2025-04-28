import { Link } from "react-router-dom";

import { FaUserFriends } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboard, MdVerified } from "react-icons/md";
import { RiGroup2Fill } from "react-icons/ri";

import fb_page_icon from "../../../src/assets/images/fb_page_icon.png";
import group_icon from "../../../src/assets/images/group_icon.png";
import group_icon_random from "../../../src/assets/images/group_icon_random.png";
import p_images from "../../../src/assets/images/p_img.jpg";
import Flex from "../ui-layout/Flex";

const LeftSideMenu = () => {
  return (
    <>
      <div className="w-[285px] py-3">
        <ul>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="w-7 rounded-full overflow-hidden">
                    <img
                      src={p_images}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">
                  Osman Zakaria
                </h2>
              </Flex>
            </Link>
          </li>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="">
                    <FaUserFriends className="text-2xl text-white" />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">Friends</h2>
              </Flex>
            </Link>
          </li>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="">
                    <MdVerified className="text-2xl text-blue-600" />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">
                  Meta Verified
                </h2>
              </Flex>
            </Link>
          </li>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="">
                    <MdDashboard className="text-2xl text-blue-600" />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">
                  Professional dashboard
                </h2>
              </Flex>
            </Link>
          </li>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="">
                    <RiGroup2Fill className="text-2xl text-blue-600" />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">Groups</h2>
              </Flex>
            </Link>
          </li>
          <li className="hover:bg-[#333334] p-2 rounded-md">
            <Link>
              <Flex className="gap-3 items-center !justify-start">
                <div className="w-[12%]">
                  <div className="w-6 object-cover">
                    <img
                      src={fb_page_icon}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <h2 className="text-white/90 text-sm font-semibold">Pages</h2>
              </Flex>
            </Link>
          </li>
        </ul>

        {/*  */}
        <div className="pt-3 pb-4 px-2">
          <hr className="text-white/90" />
        </div>

        {/*  */}
        <div className="group">
          <Flex className="items-center h-8 relative">
            <h4 className="text-[#86898D] font-bold">Your shortcuts</h4>
            <div className="text-blue-600 cursor-pointer hidden group-hover:block">
              <Link className="hover:bg-[#4E5051] inline-block py-1 px-3 rounded-sm absolute top-0 right-3 z-[9999]">
                Edit
              </Link>
            </div>
          </Flex>
          <ul className="pt-1">
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-3 justify-start">
                  <div className="w-[11%]">
                    <div className="w-8 object-cover">
                      <img
                        src={group_icon}
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm font-semibold">
                    SoftTech-IT Institute-279(Advanced WordPress...)
                  </p>
                </Flex>
              </Link>
            </li>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-3 justify-start">
                  <div className="w-[11%]">
                    <div className="w-8 object-cover">
                      <img
                        src={group_icon_random}
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm font-semibold">
                    CAP-(FDR-2306,2309)
                  </p>
                </Flex>
              </Link>
            </li>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-3 justify-start">
                  <div className="w-[11%]">
                    <div className="w-8 object-cover">
                      <img
                        src={group_icon_random}
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 font-semibold">
                    LearnwithMuntasir Community Support
                  </p>
                </Flex>
              </Link>
            </li>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-3 justify-start">
                  <div className="w-[11%]">
                    <div className="w-8 object-cover">
                      <img
                        src={group_icon_random}
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm font-semibold">
                    Search English
                  </p>
                </Flex>
              </Link>
            </li>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-3 justify-start">
                  <div className="w-[11%]">
                    <div className="w-8 object-cover">
                      <img
                        src={group_icon_random}
                        alt=""
                        className="w-full rounded-md"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm font-semibold">
                    SoftTech-IT Web Development Online Course
                  </p>
                </Flex>
              </Link>
            </li>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="items-center gap-2 justify-start">
                  <Flex className="bg-[#474748]/80 p-1 rounded-full">
                    <IoIosArrowDown className="text-xl text-white font-semibold" />
                  </Flex>
                  <div className="text-white/90 font-semibold">See more</div>
                </Flex>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
