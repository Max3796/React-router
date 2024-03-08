import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Link style={{ fontSize: "22px", color: "black" }} to={"/"}>
        <h1>
          KALVIUM
          <img
            src="https://kalvium.community/images/sidebar-3d-logo.svg"
            alt=""
          />
        </h1>
      </Link>

      <div style={{ display: "flex", marginLeft: "30px" }}>
        <Link style={{ fontSize: "30px", color: "black" }} to={"/about"}>
          About
        </Link>
        <Link
          style={{ marginLeft: "30px", fontSize: "30px", color: "black" }}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
