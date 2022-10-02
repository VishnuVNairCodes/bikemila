import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "..";
import { fetchFromAPI } from "../../utils/fetch-from-API";
import "./Feed.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { items } = await fetchFromAPI(
  //       `search?part=snippet&q=2022 ${selectedCategory} motorcycle review Powerdrift Zigwheels Strell Sagar Sheldekar Autocar Overdrive Faisal Khan`
  //     );
  //     setVideos(items);
  //   })();
  // }, [selectedCategory]);

  useEffect(() => {
    (async () => {
      const { items } = await fetchFromAPI(
        `search?part=snippet&q=Strell In Malayalam`
      );
      setVideos(items);
    })();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", flexGrow: 1 }}>
        <Typography
          className="feed-heading"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          {selectedCategory} <span>bikes</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export { Feed };
