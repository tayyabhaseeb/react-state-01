import React from "react";
import Item from "./Item";

export default function PackingList({ initialItems, setInitialItems }) {
  const packingList = initialItems.map((obj) => (
    <Item obj={obj} key={obj.id} setInitialItems={setInitialItems} />
  ));
  return (
    <div className="list">
      <ul>{packingList}</ul>
    </div>
  );
}
