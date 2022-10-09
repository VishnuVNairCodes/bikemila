import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "..";
import { fetchFromAPI } from "../../utils/fetch-from-API";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await fetchFromAPI(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(items[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
              height="77vh"
              width="100%"
            />
            <Typography
              color="var(--white)"
              variant="h5"
              fontWeight="bold"
              p={"1.6rem"}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "var(--white)" }}
              py="8px"
              px="1.6rem"
            >
              <Link to={`/channel/${channelId}`} className="link">
                <Typography variant="h6" color="var(--white)">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "1.2rem", color: "var(--gray)", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="2rem" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      {/* <Box
        px={"1.6rem"}
        py={{ md: "8px", xs: "4rem" }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={videos} />
      </Box> */}
    </Box>
  );
};

export { VideoDetail };
