import React from "react";

export interface Props {
  value: string;
}

const CustomButton = ({ value }: Props) => {
  return (
    <>
      <button className="text-[14px] h-[24px] border-solid rounded border-[#C38154] border-w border-2 px-[8px] text-[#C38154] ">
        {value}
      </button>
    </>
  );
};

export default CustomButton;
