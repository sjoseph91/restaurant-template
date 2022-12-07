import React from "react";

export default function CardGroup() {
  return (
    <div className="row m-4">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div class="card-body">
            <h3 className="">01</h3>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card mb-4">
          <div class="card-body">
            <h3 className="">02</h3>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card mb-4">
          <div class="card-body">
            <h3 className="">03</h3>
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text ">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
