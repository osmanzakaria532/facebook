import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import img_facebook from "../../src/assets/images/facebook.jpg";
import Flex from "../components/ui-layout/Flex";

const Home = () => {
  return (
    <>
      <div className="bg-[#252728] ">
        <Flex className="px-3 py-2 items-center">
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
          <div className="">2</div>
          <div className="">3</div>
        </Flex>
      </div>
    </>
  );
};

export default Home;
