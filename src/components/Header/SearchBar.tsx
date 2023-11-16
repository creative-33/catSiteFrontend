import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className=" flex justify-between items-center w-[960px] m-auto pt-[19px] pb-[13px]">
        <div className="flex justify-start items-center">
          <div>
            <p className="text-[24px]">看板猫を探す</p>
          </div>
          <div className="ml-[25px] group flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              className=" w-[320px] h-[32px] bg-[#F3F3F3] rounded-l-md shadow-inner focus-visible:border focus-visible:border-[#707070] focus-visible:border-solid focus-visible:outline-none"
            />
            <div>
              <img src="assets/search.svg" alt="search" />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className=" w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px]">
            <button className=" w-[100%] flex justify-between items-center ">
              <p className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                エリア
              </p>
              <div
                className="h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px]"
              ></div>
            </button>
          </div>
          <div className="ml-[24px] w-[112px] h-[32px] bg-[#CBB279] shadow-inner rounded pl-[16px] pt-[3px] pb-[5px] pr-[10px]">
            <button className=" w-[100%] flex justify-between items-center ">
              <p className=" text-white text-[16px] drop-shadow-[1px_1px_rgba(195,129,84,1)]">
                性 格
              </p>
              <div
                className="h-0 w-0 border-t-[8px] border-r-[6px] border-l-[6px] 
border-solid border-r-transparent border-l-transparent border-t-white ml-[20px] mt-[5px]"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
