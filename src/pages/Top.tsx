import React from "react";
import BlogBox from "../components/blog/BlogBox";
import SearchBar from "../components/Header/SearchBar";
import LankingBar from "../components/Header/LankingBar";
import Store from "../components/Store";
import Notices from "../components/Notices";
import BlogTop from "../components/BlogTop";
import BlogAD from "../components/BlogAD";
import FindSignboard from "../components/FindSignboard";

const Top = () => {
  return (
    <>
      <SearchBar />
      <LankingBar />
      <BlogTop />
      <BlogAD />
      <FindSignboard />
      <Store />
      <Notices />
    </>
  );
};

export default Top;
