import LeftSideMenu from "../components/section-layout/LeftSideMenu";
import TopMenuArea from "../components/section-layout/TopMenuArea";

import Flex from "../components/ui-layout/Flex";

const Home = () => {
  return (
    <>
      <div className="fixed w-full">
        <TopMenuArea />
      </div>
      <Flex className="items-start px-3 bg-[#252728] ">
        <LeftSideMenu />
        <div className="">2</div>
        <div className="">3</div>
      </Flex>
    </>
  );
};

export default Home;
