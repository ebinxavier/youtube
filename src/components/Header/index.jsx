import React from "react";
import LeftButtons from "./components/LeftButtons";
import RightButtons from "./components/RightButtons";
import Search from "./components/Search";

const Header = ({ onMenuClick, onSearch, suggestions }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <LeftButtons onMenuClick={onMenuClick} />
      <Search onSearch={onSearch} suggestions={suggestions}/>
      <RightButtons />
    </div>
  );
};

export default Header;
