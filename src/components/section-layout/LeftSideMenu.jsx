import { Link } from "react-router-dom";

import { FaUserFriends } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

import p_images from "../../../src/assets/images/p_img.jpg";
import Flex from "../ui-layout/Flex";

const LeftSideMenu = () => {
  return (
    <>
      <div className="!h-screen overflow-y-auto scrollbar">
        <div className="w-[285px] pt-3">
          <ul>
            <li className="hover:bg-[#333334] p-2 rounded-md">
              <Link>
                <Flex className="gap-3 items-center !justify-start">
                  <div className="w-[12%]">
                    <div className="w-7">
                      <img
                        src={p_images}
                        alt=""
                        className="rounded-full"
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
                  <h2 className="text-white/90 text-sm font-semibold">
                    Friends
                  </h2>
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
          </ul>

          {/*  */}
          <div className="pt-3 pb-5 px-2">
            <hr className="text-white/90" />
          </div>

          {/*  */}
          <ul>
            <h4 className="text-white/70">Your shortcuts</h4>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
