import React from "react";
import { useHistory } from "react-router-dom";

const Play = () => {
  const history = useHistory();
  let videoId = history.location.search.split("videoId=");
  if (videoId[1]) {
    videoId = videoId[1];
  } else {
    videoId = "NA";
  }
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Play;
