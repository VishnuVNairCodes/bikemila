import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "..";
import { fetchFromAPI } from "../../utils/fetch-from-API";
import "./Feed.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: 0,
    name: "New",
    keywords: "New",
  });
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { items } = await fetchFromAPI(
  //         `search?part=snippet&q=2022 ${selectedCategory.keywords} motorcycle bike review Powerdrift Zigwheels Strell Sagar Sheldekar Autocar Overdrive Faisal Khan`
  //       );
  //       setVideos(items);
  //     } catch (error) {
  //       console.error(error);
  //       // replace this with proper error handling on the view
  //     }
  //   })();
  // }, [selectedCategory]);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchFromAPI(`search?part=snippet&q=Arjyou`);
        setVideos(items);
      } catch (error) {
        console.error(error);
        // replace this with proper error handling on the view
      }
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
          borderRight: "1px solid var(--border-sidebar)",
          px: { xs: 0, md: "1.6rem" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p="1.6rem" sx={{ overflowY: "auto", flexGrow: 1 }}>
        <Typography
          className="feed-heading"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          {selectedCategory.name} <span>bikes</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export { Feed };
