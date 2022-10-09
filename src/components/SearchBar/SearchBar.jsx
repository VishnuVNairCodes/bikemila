import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      searchTerm("");
    }
  };
  return (
    <Stack
      component="form"
      direction="row"
      alignItems="center"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "2rem",
        border: "1px solid var(--border)",
        pl: "1.6rem",
        boxShadow: "none",
        mr: { sm: "4rem" },
        backgroundColor: "var(--white)",
      }}
    >
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "1rem", color: "var(--primary)" }}>
        <Search />
      </IconButton>
    </Stack>
  );
};

export { SearchBar };
