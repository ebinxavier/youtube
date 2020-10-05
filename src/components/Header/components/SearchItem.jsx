import React, { useRef } from "react";
import { colorBgPrimary, colorBtnPrimary } from "../../../constants";
import useHover from "../../../hooks/useHover";

const Item = ({ name, onClick }) => {
  const item = useRef();
  const [hovered] = useHover(item);
  return (
    <div
      ref={item}
      style={{
        padding: 10,
        backgroundColor: hovered ? colorBtnPrimary : colorBgPrimary,
        cursor: "pointer",
      }}
      onClick={() => onClick(name)}
    >
      <span className="item-text">{name}</span>
    </div>
  );
};

export default Item;
