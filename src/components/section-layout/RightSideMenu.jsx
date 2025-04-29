import { Link } from "react-router-dom";

import p_images from "../../../src/assets/images/p_img.jpg";
import p_images_2 from "../../../src/assets/images/p_img_2.jpg";
import Button from "../ui-layout/Button";
import Flex from "../ui-layout/Flex";

const RightSideMenu = () => {
  return (
    <>
      <div className="w-[270px] py-3">
        <ul>
          <li className="mb-2.5">
            <div className="">
              <Flex className="items-center">
                <h3 className="text-white/80 font-semibold">Friend requests</h3>
                <button className="text-blue-600 cursor-pointer hover:bg-[#4E5051] inline-block py-1 px-3 rounded-sm">
                  See all
                </button>
              </Flex>
              <Link className="">
                <Flex className="hover:bg-[#333334] p-4 rounded-md gap-3">
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
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1">Birthdays</div>
            <Link></Link>
          </li>
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1">Contacts</div>
            <Link></Link>
          </li>
          <li className="mb-2.5">
            <div className="border-t border-white/90 pt-3 mx-1">
              Group chats
            </div>
            <Link></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightSideMenu;
