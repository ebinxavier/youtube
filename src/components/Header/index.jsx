import React from "react";
import LeftButtons from "./components/LeftButtons";
import RightButtons from "./components/RightButtons";
import Search from "./components/Search";

const Header = ({ onSearch, suggestions }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <LeftButtons />
      <Search onSearch={onSearch} suggestions={suggestions}/>
      <RightButtons />
    </div>
  );
};

export default Header;
