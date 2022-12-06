import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-transparent  mt-5">
      <div className="container-md">
        <a className="navbar-brand" href="#home">
          Navbar
        </a>

        <div className="button-container ms-auto me-4 me-md-0 order-md-3">
          <button className="btn btn-primary rounded-pill" type="button ">
            Reserve a table
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active text-center"
              aria-current="page"
              href="#home"
            >
              Home
            </a>
            <a className="nav-link text-center" href="#about">
              About
            </a>
            <a className="nav-link text-center" href="#menu">
              Menu
            </a>
            <a className="nav-link text-center" href="#specials">
              Specials
            </a>
            <a className="nav-link text-center" href="#events">
              Events
            </a>
            <a className="nav-link text-center" href="#chefs">
              Chefs
            </a>
            <a className="nav-link text-center" href="#gallery">
              Gallery
            </a>
            <a className="nav-link text-center" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
