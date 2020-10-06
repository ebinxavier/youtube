import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import "../Header.css";

const LeftButtons = ({ onMenuClick }) => {
  return (
    <>
      <div className="primary-bg hide-on-md" style={{ flex: 1, minWidth: 150 }}>
        <IconButton
          onClick={onMenuClick}
          color="primary"
          aria-label="menu"
          component="span"
        >
          <Menu />
        </IconButton>
        <span className="logo" />
      </div>
      <div style={{ display: "unset" }}>
        <IconButton
          onClick={onMenuClick}
          className="show-on-md"
          color="primary"
          aria-label="menu"
          component="span"
        >
          <Menu />
        </IconButton>
        <span
          className="logo show-on-md"
          style={{
            width: 30,
            backgroundSize: 85,
            backgroundPositionY: 2,
          }}
        />
      </div>
    </>
  );
};

export default LeftButtons;
