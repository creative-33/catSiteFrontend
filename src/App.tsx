import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import BlogBox from "./components/BlogBox";
import Guess from "./components/blog/Guess";
import NavBar from "./components/NavBar";
import Lanking from "./pages/Lanking";
import CatCarousel from "./components/Header/CatCarousel";
import SearchBar from "./components/Header/SearchBar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/index";
import Header from "./components/Header";
import Top from "./pages/Top";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      {/* navbar part start  */}
      <div className="w-[960px] m-auto">{/* <NavBar /> */}</div>
      {/* navbar part end */}

      {/* carousel part start  */}
      {/* <CatCarousel /> */}
      {/* carousel part end  */}

      {/* search bar part start  */}
      {/* <SearchBar /> */}
      {/* search bar part end */}

      {/* blog part start  */}
      {/* <div className="App bg-[#F5F4EC]">
        <div>
          <div className="w-[960px] m-auto">
            <div className="flex justify-between flex-wrap ">
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
              <BlogBox />
            </div>
          </div>
        </div>
      </div> */}
      {/* blog part end */}

      {/* guess part start  */}
      {/* <div className="w-[960px] m-auto">
        <div className="flex justify-between flex-wrap">
          <Guess />
          <Guess />
          <Guess />
          <Guess />
        </div>
      </div> */}
      {/* guess part end  */}

      {/* lanking part start  */}
      {/* <div className="bg-[#F5F4EC]">
        <div>
          <div className="w-[960px] m-auto">
            <div className="flex justify-between flex-wrap ">
              <Lanking />
              <Lanking />
              <Lanking />
            </div>
          </div>
        </div>
      </div> */}
      {/* lanking part end  */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/top" element={<Top />}></Route>
          <Route path="/lanking" element={<Lanking />}></Route>
          <Route path="/top/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>

      {/* footer part start  */}
      <Footer />
      {/* footer part end  */}
    </>
  );
}

export default App;
