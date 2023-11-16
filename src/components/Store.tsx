import React from "react";
import Guess from "./blog/Guess";
import MoreButton from "./common/MoreButton";

const Store = () => {
  return (
    <>
      <div className="w-[960px] m-auto">
        <div className="py-[48px]">
          <div className="text-center pb-[48px]">
            <h3 className=" w-[321px] border-y border-solid border-[#707070] text-center text-[32px] inline-block">
              推しニャン！コラム
            </h3>
          </div>
          <div className="flex justify-between flex-wrap">
            <Guess />
            <Guess />
            <Guess />
          </div>
          <MoreButton />
        </div>
      </div>
    </>
  );
};

export default Store;
