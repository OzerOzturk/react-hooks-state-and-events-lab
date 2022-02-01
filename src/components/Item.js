import React, { useState } from "react";

function Item({ name, category }) {
  const [itemCart, setItemCart] = useState("");

  const handleClickCart = () => {
    setItemCart("in-cart");
  };

  return (
    <li className={itemCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClickCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
