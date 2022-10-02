import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/data";
import "./Sidebar.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "95%" },
      flexDirection: { md: "column" },
      pl: { xs: 2, md: 0 },
    }}
  >
    {categories.map(({ id, name }) => (
      <button
        key={id}
        className={`category-btn ${
          name === selectedCategory && "selected-category-btn"
        }`}
        onClick={() => setSelectedCategory(name)}
      >
        {name}
      </button>
    ))}
  </Stack>
);

export { Sidebar };
