import React from "react";
import BlogBox from "./blog/BlogBox";

const BlogTop = () => {
  return (
    <>
      <div className=" bg-[#F5F4EC]">
        <div className="w-[960px] m-auto">
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
        </div>
      </div>
    </>
  );
};

export default BlogTop;
