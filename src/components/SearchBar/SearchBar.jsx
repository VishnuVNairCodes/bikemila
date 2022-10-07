import React from "react";
import { IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Stack
    component="form"
    direction="row"
    alignItems="center"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1px solid var(--border)",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
      backgroundColor: "var(--white)",
    }}
  >
    <input
      type="text"
      className="search-bar-input"
      placeholder="Search..."
      value=""
      onChange={() => {}}
    />
    <IconButton type="submit" sx={{ p: "10px", color: "var(--primary)" }}>
      <Search />
    </IconButton>
  </Stack>
);

export { SearchBar };
