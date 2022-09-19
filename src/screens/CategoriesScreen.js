import React, { useState } from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import MainCategories from "../components/Categories/MainCategories";
const CategoriesScreen = () => {
  const [isClick, setClick] = useState(false);
  const [isDisplay, setDisplay] = useState(false);
  const handleClickMenu = (e) => {
    setClick(!isClick);
  };
  const handleDisplay = (e) => {
    setDisplay(!isDisplay);
  };
  return (
    <>
      <Sidebar click={isClick} handleClickMenu={handleClickMenu} />
      <main className="main-wrap">
        <Header
          handleClickMenu={handleClickMenu}
          isDisplay={isDisplay}
          handleDisplay={handleDisplay}
        />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoriesScreen;
