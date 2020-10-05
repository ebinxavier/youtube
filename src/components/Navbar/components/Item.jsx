import React, { useRef } from "react";
import { colorBgPrimary, colorBtnPrimary } from "../../../constants";
import useHover from "../../../hooks/useHover";

const Item = ({ icon, name, selected }) => {
  const item = useRef();
  const [hovered] = useHover(item);
  return (
    <div
      ref={item}
      style={{
        padding: 10,
        backgroundColor: selected || hovered ? colorBtnPrimary : colorBgPrimary,
        cursor:"pointer"
      }}
    >
      {icon}
      <span className="item-text">{name}</span>
    </div>
  );
};

export default Item;
