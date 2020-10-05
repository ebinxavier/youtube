import React from "react";
import { useHistory } from "react-router-dom";
import { colorTextSecondary, colorTextPrimary } from "../constants";

const Video = ({
  thumbnail,
  description,
  views,
  title,
  publishedOn,
  owner,
  time,
  videoId,
}) => {
  const history = useHistory();
  return (
    <div
      style={{
        width: "32%",
        margin: "15px 0",
        padding: 5,
        color: colorTextSecondary,
      }}
    >
      <img
        width="100%"
        src={thumbnail.url}
        alt="video"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/youtube/play?videoId=${videoId}`)}
      />
      <div
        style={{
          position: "relative",
          top: "-44px",
          display: "inline-block",
          padding: "4px 6px",
          borderRadius: "3px",
          background: "black",
          color: "white",
          float: "right",
          margin: "10px",
          fontSize: 12,
        }}
      >
        <b>{time}</b>
      </div>
      {/* Title */}
      {title && (
        <div key="title" style={{ color: colorTextPrimary, marginTop: 10 }}>
          {title.runs.map((line) => (
            <span key={line.text}>{line.text}</span>
          ))}
        </div>
      )}
      <div style={{ fontSize: 14 }}>
        <b>{owner}</b>
        <br />
        <span>{views}</span>
        {" • "}
        <span>{publishedOn}</span>
      </div>
      {/* Description */}
      {description && (
        <div key="description" style={{ fontSize: 12, marginTop: 5 }}>
          {description.runs.map((line, index) => {
            if (line.bold)
              return (
                <span key={line.text + index} style={{ fontWeight: "bold" }}>
                  {line.text}
                </span>
              );
            return <span key={line.text + index}>{line.text}</span>;
          })}
        </div>
      )}
    </div>
  );
};

export default Video;
