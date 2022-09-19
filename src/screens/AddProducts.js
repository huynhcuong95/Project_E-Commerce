import React, { useState } from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AddProductMain from "./../components/products/AddProductMain";
const AddProducts = () => {
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
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProducts;
