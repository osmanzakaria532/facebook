import React from "react";
import { Link } from "react-router-dom";

import Flex from "../ui-layout/Flex";

const Login_horizontal = () => {
  return (
    <>
      <Flex className="py-2 px-6 items-center">
        <Link>
          <div className="text-3xl text-[#0866FF] font-semibold">Facebook</div>
        </Link>
        <Flex className="items-center gap-3">
          <input
            type="text"
            placeholder="Email or Mobile"
            className="border rounded-sm py-2 px-4"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded-sm py-2 px-4"
          />
          <Link className="bg-[#0866FF] hover:bg-[#1B74E4] text-white font-bold inline-block py-2 px-6 rounded-sm">
            Login
          </Link>
          <Link
            className="text-[#4267b2] font-bold hover:underline"
            to="/findaccount"
          >
            Forgotten account?
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Login_horizontal;
