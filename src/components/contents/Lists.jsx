import React from "react";
import Item from "../item";
import "./Lists.css";
function Lists({ items, onDeleteItem, onToggleItem, onClear }) {
  return (
    <>
      <ul className="list">
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <button className="clear" onClick={onClear}>
        clear
      </button>
    </>
  );
}

export default Lists;
