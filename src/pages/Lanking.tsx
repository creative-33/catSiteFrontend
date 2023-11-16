import React from "react";
import SearchBar from "../components/Header/SearchBar";
import LankingBar from "../components/Header/LankingBar";
import Top from "../components/Lanking/Top";
import BlogBox from "../components/blog/BlogBox";
import Guess from "../components/blog/Guess";
import LankingItem from "../components/Lanking/Lankingitem";
import MoreButton from "../components/common/MoreButton";
import FindSignboard from "../components/FindSignboard";
import Store from "../components/Store";
import Notices from "../components/Notices";

const Lanking = () => {
  return (
    <>
      <SearchBar />
      <LankingBar />
      <div className="bg-[#F5F4EC] ">
        <Top />
        <div className=" w-[960px] m-auto">
          <div className=" flex justify-between flex-wrap">
            <div>
              <div className="flex mb-[8px]">
                <span className="w-[36px] h-[24px] mr-[12px]">
                  <img src="assets/Group 639.svg" alt="" />
                </span>
                <div>
                  <p className="font-bold">2位</p>
                </div>
              </div>
              <BlogBox
                name={"heracles"}
                cafe={"cafe"}
                location={"pari"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={"this is description"}
              />
            </div>
            <div>
              <div className="flex mb-[8px]">
                <span className="w-[36px] h-[24px] mr-[12px]">
                  <img src="assets/Group 639.svg" alt="" />
                </span>
                <div>
                  <p className="font-bold">2位</p>
                </div>
              </div>
              <BlogBox
                name={"heracles"}
                cafe={"cafe"}
                location={"pari"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={"this is description"}
              />
            </div>
            <div>
              <div className="flex mb-[8px]">
                <span className="w-[36px] h-[24px] mr-[12px]">
                  <img src="assets/Group 639.svg" alt="" />
                </span>
                <div>
                  <p className="font-bold">2位</p>
                </div>
              </div>
              <BlogBox
                name={"heracles"}
                cafe={"cafe"}
                location={"pari"}
                vote={2}
                character={["fdsa", "reqw"]}
                description={""}
              />
            </div>
            <div>
              <div className="flex mb-[8px]">
                <span className="w-[36px] h-[24px] mr-[12px]">
                  <img src="assets/Group 639.svg" alt="" />
                </span>
                <div>
                  <p className="font-bold">5位</p>
                </div>
              </div>
              <LankingItem />
            </div>
            <div>
              <div className="flex mb-[8px]">
                <span className="w-[36px] h-[24px] mr-[12px]">
                  <img src="assets/Group 639.svg" alt="" />
                </span>
                <div>
                  <p className="font-bold">5位</p>
                </div>
              </div>
              <LankingItem />
            </div>
          </div>
          <div className=" flex justify-between items-center pb-[16px] border-b border-b-solid border-b-[#CBB279]">
            <div className="mt-[36px] flex justify-end cursor-pointer">
              <span className="material-symbols-outlined ">arrow_back_ios</span>
              <p className="pr-[7px] text-[16px] tracking-[-.2em]">次月</p>
            </div>
            <div className="mt-[36px] flex justify-end cursor-pointer">
              <p className="pr-[7px] text-[16px] tracking-[-.2em]">前月</p>
              <span className="material-symbols-outlined ">
                arrow_forward_ios
              </span>
            </div>
          </div>
          {/* <hr className="border border-[#CBB279] border-solid " /> */}
        </div>
      </div>
      <FindSignboard />
      <Store />
      <Notices />
    </>
  );
};

export default Lanking;
