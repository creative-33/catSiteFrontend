import React from "react";

const LankingBar = () => {
  return (
    <>
      <div className="bg-[#F5F4EC]">
        <div className=" flex justify-between items-center w-[960px] m-auto ">
          <div className=" flex justify-start mt-[35px] mb-[24px] pt-[12px] pb-[11px]  border-y-2 border-y-solid border-y-[#CBB279] text-[20px] w-[100%]">
            <div className="flex mr-[16px]">
              <img src="assets/Group 640.svg" className="mr-[16px]" alt="" />
              <h4 className="">推しニャンLANKING</h4>
            </div>
            <div className="w-[264px] flex justify-between items-center ml-[55px]">
              <div>
                <button className="hover:text-[#E695A9] hover:underline">
                  月間TOP10
                </button>
              </div>
              <div className="w-0 h-[16px] border border-solid border-[#CBB279] mt-[2px]"></div>
              <div>
                <button className="hover:text-[#E695A9] hover:underline">
                  総合TOP10
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LankingBar;
