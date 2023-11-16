import React from "react";
import CustomButton from "../common/CustomButton";

const LankingItem = () => {
  return (
    <>
      <div className=" flex-column">
        <div className="flex justify-between w-[464px] h-[144px]">
          <div className="relative">
            <img src="assets/lanking.png" alt="" />
            <span className="absolute top-[8px] right-[8px]">
              <img src="assets/btn-footSmall.svg" alt="" />
            </span>
          </div>
          <div className="bg-white px-[16px] py-[8px] w-[272px] ">
            <h3 className="text-[24px] font-bold text-left text-ellipsis overflow-hidden whitespace-nowrap tracking-[-.15em]">
              なまむぎなまごめ
            </h3>
            <h4 className=" w-[145px] underline text-[16px] text-ellipsis overflow-hidden tracking-tighter whitespace-nowrap ">
              にゃんにゃんカフェ
            </h4>
            <div className=" flex justify-between items-center pt-[25px] ">
              <div className="flex flex-start">
                <div>
                  <img src="assets/assets/Group 755.svg" alt="" />
                </div>
                <div className="pl-[8px]">
                  <p>000ニャン</p>
                </div>
              </div>
              <CustomButton value={"東京都"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LankingItem;
