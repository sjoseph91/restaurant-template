import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <section id="hero" className="container-fluid">
      <Header />
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div
            className="carousel-item active position-relative"
            style={{ backgroundImage: "url(src/assets/images/carousel-1.jpg)" }}
          >
            <div className="carousel-caption  position-absolute bottom-50">
              <h5 className="my-3">Local Resturant</h5>
              <p className="d-none d-md-block">
                We are passionate about local, sustainable foods and our chefs
                create nutritious, seasonal dishes that are sure to amaze.
              </p>
              <div className="text-center w-100 w-md-25 d-flex justify-content-center align-items-center mx-auto">
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary btn-lg text-white rounded-pill me-2 me-md-4"
                >
                  Our Menu
                </a>
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary text-white rounded-pill btn-lg"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
          <div
            className="carousel-item position-relative"
            style={{ backgroundImage: "url(src/assets/images/carousel-2.jpg)" }}
          >
            <div className="carousel-caption  position-absolute bottom-50">
              <h5 className="my-3">Local Resturant</h5>
              <p className="d-none d-md-block">
                We are passionate about local, sustainable foods and our chefs
                create nutritious, seasonal dishes that are sure to amaze.
              </p>
              <div className="text-center w-100 w-md-25 d-flex justify-content-center align-items-center mx-auto">
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary text-white rounded-pill me-2 me-md-4 btn-lg"
                >
                  Our Menu
                </a>
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary text-white rounded-pill btn-lg"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
          <div
            className="carousel-item position-relative"
            style={{ backgroundImage: "url(src/assets/images/carousel-3.jpg)" }}
          >
            <div className="carousel-caption  position-absolute bottom-50">
              <h5 className="my-3">Local Resturant</h5>
              <p className="d-none d-md-block">
                We are passionate about local, sustainable foods and our chefs
                create nutritious, seasonal dishes that are sure to amaze.
              </p>
              <div className="text-center w-100 w-md-25 d-flex justify-content-center align-items-center mx-auto">
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary text-white rounded-pill me-2 me-md-4 btn-lg"
                >
                  Our Menu
                </a>
                <a
                  href="#"
                  type="button"
                  className="btn btn-outline-primary text-white rounded-pill btn-lg"
                >
                  Book a Table
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev rounded-circle "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
