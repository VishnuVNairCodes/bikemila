import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
} from "./components";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "var(--black)", color: "var(--white)" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
