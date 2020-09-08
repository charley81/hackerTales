import React from "react";
import Item from "./Item";

const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <div key={item.objectId}>
      <Item key={item.objectId} item={item} onRemoveItem={onRemoveItem} />
    </div>
  ));

export default List;
