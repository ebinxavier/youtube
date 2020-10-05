import React from "react";
import Item from "./Item";

const ItemList = ({ list }) => {
    
  return (
    <div style={{ padding: "10px 0" }}>
      {list.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
