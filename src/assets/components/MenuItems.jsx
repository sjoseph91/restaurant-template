import React, { useState } from "react";

export default function MenuItems({ displayedItems }) {
  return (
    <div className="menu-items container">
      <div className="row ">
        {displayedItems.map((item) => (
          <div key={item.name} className="col-md-6 p-2 mb-3">
            <div className="d-flex menu-item justify-content-between ps-2">
              <div className="item-name">{item.name}</div>
              <div className="item-price ms-2">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
