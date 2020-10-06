import { IconButton } from "@material-ui/core";
import { VideoCall, Apps, Notifications } from "@material-ui/icons";
import React from "react";
import '../Header.css';

const RightButtons = () => {
  return (
    <div className="primary-bg hide-on-md" style={{ flex: 1, minWidth: 200, textAlign:"right" }}>
      <IconButton color="primary" aria-label="video" component="span">
        <VideoCall />
      </IconButton>
      <IconButton color="primary" aria-label="apps" component="span">
        <Apps />
      </IconButton>
      <IconButton color="primary" aria-label="notification" component="span">
        <Notifications />
      </IconButton>
      <IconButton color="primary" aria-label="notification" component="span">
        <img
          style={{
            width: "30px",
            borderRadius: "50%",
          }}
          src="/youtube/avatar.png"
          alt="avatar"
        />
      </IconButton>
    </div>
  );
};

export default RightButtons;
