import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "..";
import { fetchFromAPI } from "../../utils/fetch-from-API";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const channelDetailResponse = await fetchFromAPI(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(channelDetailResponse?.items[0]);
        const videosResponse = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(videosResponse?.items);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255, 1) 100%)",
            height: "30rem",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-11rem" />
      </Box>
      <Box display="flex" p="1.6rem">
        <Box sx={{ mr: { sm: "10rem" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export { ChannelDetail };
