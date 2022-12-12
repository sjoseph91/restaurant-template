import React from "react";

export default function Specials() {
  return (
    <section className="specials container" id="specials">
      <header className="text-center">
        <h3>
          See our <span className="text-primary">Specials</span>
        </h3>
        <p className="lead">
          Our specials change monthly and offer the freshest ingredients made by
          visiting chefs.
        </p>
      </header>
      <div className="row my-5">
        <div className="col-lg-3 ">
          <ul
            class="nav d-flex flex-column align-items-lg-start me-5 border-end "
            id="myTab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="special1-tab"
                data-bs-toggle="tab"
                data-bs-target="#special1-tab-pane"
                type="button"
                role="tab"
                aria-controls="special1-tab-pane"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="special2-tab"
                data-bs-toggle="tab"
                data-bs-target="#special2-tab-pane"
                type="button"
                role="tab"
                aria-controls="special2-tab-pane"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="special3-tab"
                data-bs-toggle="tab"
                data-bs-target="#special3-tab-pane"
                type="button"
                role="tab"
                aria-controls="special3-tab-pane"
                aria-selected="false"
              >
                Contact
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="special4-tab"
                data-bs-toggle="tab"
                data-bs-target="#special4-tab-pane"
                type="button"
                role="tab"
                aria-controls="special4-tab-pane"
                aria-selected="false"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="special1-tab-pane"
              role="tabpanel"
              aria-labelledby="special1-tab"
              tabindex="0"
            >
              1
            </div>
            <div
              class="tab-pane fade"
              id="special2-tab-pane"
              role="tabpanel"
              aria-labelledby="special2-tab"
              tabindex="0"
            >
              2
            </div>
            <div
              class="tab-pane fade"
              id="special3-tab-pane"
              role="tabpanel"
              aria-labelledby="special3-tab"
              tabindex="0"
            >
              3
            </div>
            <div
              class="tab-pane fade"
              id="special4-tab-pane"
              role="tabpanel"
              aria-labelledby="special4-tab"
              tabindex="0"
            >
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
