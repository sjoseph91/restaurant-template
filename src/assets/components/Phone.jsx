import React from "react";

export default function Phone() {
  return (
    <div className="container">
      <div className=" p-1 text-white phone position-fixed top-0 ">
        <span className="me-3">
          <i className="bi bi-telephone me-2"></i> (555) 123-4567
        </span>

        <span className="me-3">
          <i className="bi bi-clock mx-2"></i> 10am to 10pm Mon-Sat
        </span>
      </div>
    </div>
  );
}
