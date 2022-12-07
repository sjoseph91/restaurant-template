import React from "react";
import CardGroup from "./CardGroup";

export default function Why() {
  return (
    <section className="why">
      <h2 className="mt-5 mb-2 text-center">
        Why choose{" "}
        <span className="text-primary text-center">Name of Restuarant</span>
      </h2>
      <p className="lead text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quas
        neque, fugiat recusandae expedita hic explicabo quod nesciunt
        praesentium consequuntur.
      </p>
      <CardGroup />
    </section>
  );
}
