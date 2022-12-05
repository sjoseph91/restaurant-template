import React from "react";
import Navbar from "./Navbar";
import Phone from "./Phone";

export default function Header() {
  return (
    <header className="position-absolute position-relative top-0 start-0 w-100">
      <Phone />
      <Navbar />
    </header>
  );
}
