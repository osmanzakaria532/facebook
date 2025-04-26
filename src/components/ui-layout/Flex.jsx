import React from "react";

const Flex = ({ className, children, ...props }) => {
  return (
    <>
      <div
        className={`flex justify-between  ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Flex;
