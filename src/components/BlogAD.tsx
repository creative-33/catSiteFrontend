import React from "react";
import BlogBox from "./blog/BlogBox";

const BlogAD = () => {
  return (
    <>
      <div className=" bg-[#F5F4EC]">
        <div className="w-[960px] m-auto">
          <div className="bg-white text-center py-[65px] mb-[16px]">
            <h3 className="text-[16px]">キャンペーン / AD</h3>
          </div>
          <div className="flex justify-between flex-wrap ">
            <BlogBox
              name={"heracles"}
              cafe={"cafe"}
              location={"pari"}
              vote={2}
              character={["fdsa", "reqw"]}
              description={"this is description"}
            />
            <BlogBox
              name={"heracles"}
              cafe={"cafe"}
              location={"pari"}
              vote={2}
              character={["fdsa", "reqw"]}
              description={"this is description"}
            />
            <BlogBox
              name={"heracles"}
              cafe={"cafe"}
              location={"pari"}
              vote={2}
              character={["fdsa", "reqw"]}
              description={"this is description"}
            />
          </div>
          <div className="pt-[15px] pb-[35px] text-center border-b border-b-solid border-[#CCC]">
            <button className="w-[161px] h-[32px] rounded text-white bg-[#CBB279] shadow-inner text-[16px] py-[5px]">
              <p className="drop-shadow-[1px_1px_rgba(195,129,84,1)] translate-x-0.5">
                もっとみるニャン！
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAD;
