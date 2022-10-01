import React from "react";
import { Stack } from "@mui/material";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    Sidebar
  </Stack>
);

export { Sidebar };
