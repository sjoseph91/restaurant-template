import React from "react";

export default function About() {
  return (
    <section id="about" className="container-fluid p-4 about">
      <div className="row">
        <div className="col-lg-5 about-pic"></div>
        <div className="col-lg-7 p-4 d-flex flex-column justify-content-evenly align-items-stretch ">
          <h2 className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
            illo? Lorem ipsum dolor,
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            sit? sit amet consectetur adipisicing elit. Rerum, voluptas!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            sit? sit amet consectetur adipisicing elit. Rerum, voluptas!
          </p>
          <ul>
            <li>
              {" "}
              <i class="bi bi-check2-all text-primary"></i> An item
            </li>
            <li>
              {" "}
              <i class="bi bi-check2-all text-primary"></i>A second item
            </li>
            <li>
              {" "}
              <i class="bi bi-check2-all text-primary"></i>A third item
            </li>
          </ul>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            sit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore, enim.
          </p>
        </div>
      </div>
    </section>
  );
}
