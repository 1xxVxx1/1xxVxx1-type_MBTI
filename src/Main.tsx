import { Routes, Route, BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewInputPage from "./pages/NewInputPage";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import React from 'react';

const BodyGlobal = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");

  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: Pretendard, sans-serif;
  }
`;

// 2개 Route
function Main () {
  return (
    <>
      <BodyGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>  
            <Route path="color-surveys" element={<IndexPage className=""/>} /> 
            <Route path="color-surveys/new" element={<NewInputPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default Main;