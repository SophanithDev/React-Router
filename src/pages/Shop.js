/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useEffect, useState } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };

  return (
    <div>
      {items && items.map((item) => <h3 key={item.itemId}>{item.name}</h3>)}
    </div>
  );
}

export default Shop;
