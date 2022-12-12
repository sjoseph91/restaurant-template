import React, { useState } from "react";

export default function MenuItems({ displayedItems }) {
  return (
    <div className="menu-items container">
      <div className="row ">
        {displayedItems.map((item) => (
          <div key={item.name} className="col-md-6 mb-3">
            <div className="d-flex menu-item justify-content-between ">
              <div className="item-name text-primary lead">{item.name}</div>
              <div className="item-price ms-2">{item.price}</div>
            </div>
            <p className="text-muted mx-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
