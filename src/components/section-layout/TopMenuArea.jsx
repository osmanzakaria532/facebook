import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { GrGamepad, GrYoutube } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdMapsHomeWork } from "react-icons/md";
import { RiNotification4Fill } from "react-icons/ri";

import img_facebook from "../../../src/assets/images/facebook.jpg";
import p_images from "../../../src/assets/images/p_img.jpg";
import Flex from "../ui-layout/Flex";

const TopMenuArea = () => {
  return (
    <>
      <div className="bg-[#252728] border-b border-[#d1d1d1]">
        {/* Left Area */}
        <Flex className="px-3 py-1.5 items-center">
          <Flex className="items-center gap-2">
            <div className="w-11">
              <Link to="/">
                <img
                  src={img_facebook}
                  alt=""
                  className="rounded-full w-full"
                />
              </Link>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search Facebook"
                className="pl-9 pr-3 py-2 rounded-full border border-[#333334] focus:outline-none  placeholder-gray-300 bg-[#333334] text-white"
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 text-xl" />
            </div>
          </Flex>

          {/* Middle Area */}
          <Flex className="gap-3 ">
            <Flex className="">
              <Link className="hover:bg-[#3B3D3E] inline-block px-10 py-1.5 rounded-lg relative after:absolute after:left-0 after:-bottom-[8px] after:w-full after:h-[4px] after:bg-[#2176FF]">
                <MdMapsHomeWork className="text-3xl text-[#E5E8EB]" />
              </Link>
            </Flex>
            <Flex className="">
              <Link className="hover:bg-[#3B3D3E] inline-block px-10 py-1.5 rounded-lg">
                <GrYoutube className="text-3xl text-[#E5E8EB]" />
              </Link>
            </Flex>
            <Flex className="">
              <Link className="hover:bg-[#3B3D3E] inline-block px-10 py-1.5 rounded-lg">
                <HiUserGroup className="text-3xl text-[#E5E8EB]" />
              </Link>
            </Flex>
            <Flex className="">
              <Link className="hover:bg-[#3B3D3E] inline-block px-10 py-1.5 rounded-lg">
                <GrGamepad className="text-3xl text-[#E5E8EB]" />
              </Link>
            </Flex>
          </Flex>

          {/* Right Area */}
          <Flex className="items-center gap-3">
            <Flex className="w-11 h-11 bg-[#4E5051] rounded-full relative group cursor-pointer items-center justify-center ">
              <Link>
                <CgMenuGridO className="text-2xl text-[#E5E8EB]" />
              </Link>

              {/* Overlay */}
              <div className="absolute z-50 inset-0 bg-[#E5E8EB]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Flex>
            <Flex className="w-11 h-11 bg-[#4E5051] rounded-full relative group cursor-pointer items-center justify-center ">
              <Link>
                <FaFacebookMessenger className="text-2xl text-[#E5E8EB]" />
              </Link>

              {/* Overlay */}
              <div className="absolute z-50 inset-0 bg-[#E5E8EB]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Flex>
            <Flex className="w-11 h-11 bg-[#4E5051] rounded-full relative group cursor-pointer items-center justify-center ">
              <Link>
                <RiNotification4Fill className="text-2xl text-[#E5E8EB]" />
              </Link>

              {/* Overlay */}
              <div className="absolute z-50 inset-0 bg-[#E5E8EB]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Flex>

            {/* Profile Icon */}
            <div className="w-11 relative group cursor-pointer">
              <Link>
                <img
                  src={p_images}
                  alt=""
                  className="rounded-full"
                />
              </Link>

              {/* Overlay */}
              <div className="absolute z-50 inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Arrow */}
              <div className="bg-[#3B3D3D] w-4 h-4 p-[2px] rounded-full absolute bottom-0 right-0">
                <IoIosArrowDown className="text-white text-xs" />
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default TopMenuArea;
