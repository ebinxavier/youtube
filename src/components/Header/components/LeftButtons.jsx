import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

const LeftButtons = () => {
  return (
    <div className="primary-bg" style={{ flex: 1, minWidth: 150 }}>
      <IconButton color="primary" aria-label="menu" component="span">
        <Menu />
      </IconButton>
      <span
        style={{
          backgroundImage: "url('/images/logo.png')",
          width: "100px",
          height: "30px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display: "inline-block",
          verticalAlign: "middle",
        }}
      />
    </div>
  );
};

export default LeftButtons;
