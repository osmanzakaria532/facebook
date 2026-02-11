import LeftSideMenu from "../components/section-layout/LeftSideMenu";
import RightSideMenu from "../components/section-layout/RightSideMenu";
import TopMenuArea from "../components/section-layout/TopMenuArea";

import Flex from "../components/ui-layout/Flex";

const Home = () => {
  return (
    <>
      <div className="fixed w-full z-50">
        <TopMenuArea />
      </div>
      <div className="pt-14 bg-[#252728]">
        <Flex className="items-start h-screen bg-[#252728]">
          <div className="fixed h-[calc(100vh-50px)] overflow-y-auto scrollbar-hide hover:scrollbar-default ">
            <LeftSideMenu />
          </div>
          <div className="w-[500px]  mx-auto py-3">news feed</div>
          <div className="fixed right-0 h-[calc(100vh-50px)] overflow-y-auto scrollbar-hide hover:scrollbar-default">
            <RightSideMenu />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Home;