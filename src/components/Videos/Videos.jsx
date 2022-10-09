import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "..";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap="1.6rem">
      {videos.map((item) => (
        <Box key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export { Videos };
