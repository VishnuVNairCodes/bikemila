import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "..";

import "./NavBar.css";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      backgroundColor: "var(--black)",
    }}
  >
    <Link to="/" className="nav-logo">
      <img
        src={require("../../assets/images/logo.png")}
        alt="logo"
        className="nav-logo-img"
      />
      <h1 className="nav-logo-title">
        Bike<span>Mila</span>
      </h1>
    </Link>
    <SearchBar />
  </Stack>
);

export { NavBar };
