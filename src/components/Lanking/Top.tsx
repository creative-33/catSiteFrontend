import React from "react";
import CustomButton from "../common/CustomButton";

const Top = () => {
  return (
    <>
      <div className="pt-[26px] pb-[24px] w-[960px] m-auto">
        <div className="flex justify-start">
          <div>
            <img src="assets/Group 642.svg" alt="top" />
          </div>
          <div className="pl-[8px]">
            <p className="text-[24px] font-bold">1位</p>
          </div>
        </div>
        <div className=" flex ">
          <div className="w-[533px] h-[400px]">
            <img src="assets/top.png" alt="" />
          </div>
          <div className="relative flex-col justify-start w-[427px] bg-white  p-[24px] ">
            <div className="flex-col">
              <div className="text-[24px] font-bold pb-[8px]">
                <h3>なまむぎなまごめ</h3>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4>にゃんにゃんカフェ</h4>
                </div>
                <div>
                  <CustomButton value="東京都" />
                </div>
              </div>
              <hr className="border border-[#CCC] mt-[24px]" />
              <div className="flex justify-content-start items-center py-[16px] ">
                <div>
                  <img src="assets/Group 90.svg" alt="" />
                </div>
                <div className="pl-[8px]">
                  <p>性格</p>
                </div>
                <div className="pl-[8px]">
                  <CustomButton value={"やさしい"} />
                </div>
                <div className="pl-[8px]">
                  <CustomButton value={"気分屋さん"} />
                </div>
              </div>
              <div className="flex justify-content-start items-center pb-[16px]">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>出勤頻度</p>
                </div>
                <div>
                  <CustomButton value={"毎日"} />
                </div>
              </div>
              <hr className="border border-[#CCC]" />
            </div>
            <div className=" ">
              <div className="flex pt-[16px] ">
                <p className=" break-words	text-[16px]  overflow-hidden whitespace-wrap">
                  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□
                </p>
              </div>
              <div className="absolute bottom-6 left-6 flex justify-start items-center">
                <span className=" flex d-inline-block align-items-center w-[24px] h-[24px]  mr-[9px]">
                  <img
                    src="assets/recommend.svg"
                    className=" align-items-center "
                    alt=""
                  />
                </span>
                <h2 className="text-[24px] d-inline-block">000ニャン</h2>
              </div>
              <div className="absolute bottom-6 right-6">
                <img src="assets/btn-foot.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
