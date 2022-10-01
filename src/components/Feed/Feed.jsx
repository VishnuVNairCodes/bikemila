import React from "react";
import { Stack, Box } from "@mui/material";
import { Sidebar } from "..";

const Feed = () => (
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
        height: {
          xs: "auto",
          md: "92vh",
        },
        borderRight: "1px solid #3d3d3d",
        px: { xs: 0, md: 2 },
      }}
    >
      <Sidebar />
    </Box>
  </Stack>
);

export { Feed };
