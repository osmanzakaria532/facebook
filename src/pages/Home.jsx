import LeftSideMenu from "../components/section-layout/LeftSideMenu";
import RightSideMenu from "../components/section-layout/RightSideMenu";
import TopMenuArea from "../components/section-layout/TopMenuArea";

import Flex from "../components/ui-layout/Flex";

const Home = () => {
  return (
    <>
      <div className="fixed w-full">
        <TopMenuArea />
      </div>
      <div className="pt-14">
        <Flex className="items-start px-3 bg-[#252728]">
          <div className="h-[calc(100vh-50px)] overflow-y-auto scrollbar-hide hover:scrollbar-default sticky">
            <LeftSideMenu />
          </div>
          <div className="">2</div>
          <div className="h-[calc(100vh-50px)] overflow-y-auto scrollbar-hide hover:scrollbar-default sticky">
            <RightSideMenu />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Home;