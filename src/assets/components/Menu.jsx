import React from "react";
import MenuItems from "./MenuItems";
import menu from "../menuData.json";
import { useState } from "react";

export default function Menu() {
  const [filterVal, setFilterVal] = useState("");
  const displayedItems = filterVal
    ? menu.filter((item) => item.category === filterVal)
    : menu;
  return (
    <section id="menu" className="menu">
      <h3 className="text-center">
        Check out our tasty <span className="text-primary">Menu</span>
      </h3>
      <div className="buttons mx-auto p-3 text-center ">
        <button type="button" className="btn" onClick={() => setFilterVal("")}>
          Show all
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setFilterVal("starter")}
        >
          Starters
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setFilterVal("salad")}
        >
          Salads
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setFilterVal("main")}
        >
          Mains
        </button>
      </div>
      <MenuItems displayedItems={displayedItems} />
    </section>
  );
}
