import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "..";
import { fetchFromAPI } from "../../utils/fetch-from-API";
import { useParams } from "react-router-dom";

import "./SearchFeed.css";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchFromAPI(
          `search?part=snippet&q=${searchTerm} motorcycles bikes review`
        );
        setVideos(items);
      } catch (error) {
        console.error(error);
        // replace this with proper error handling on the view
      }
    })();
  }, [searchTerm]);

  return (
    <Box p="1.6rem" sx={{ overflowY: "auto", flexGrow: 1 }}>
      <Typography
        className="search-feed-heading"
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Search Results for <span>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export { SearchFeed };
