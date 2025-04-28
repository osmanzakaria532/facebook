import LeftSideMenu from "../components/section-layout/LeftSideMenu";
import TopMenuArea from "../components/section-layout/TopMenuArea";

import Flex from "../components/ui-layout/Flex";

const Home = () => {
  return (
    <>
      <div className="fixed w-full">
      <div className="">
        <TopMenuArea />
      </div>
      <Flex className="items-start px-3 bg-[#252728] ">
        <div className="">
          <LeftSideMenu />
        </div>
        <div className="">2</div>
        <div className="">3</div>
      </Flex>
    </>
  );
};

export default Home;
