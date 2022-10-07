import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoChannelUrl,
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../../utils/data";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "35rem", md: "32rem" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: "35rem", height: "18rem" }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "var(--bg-card-content)", height: "8rem" }}
      >
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          className="link"
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="var(--white)"
          >
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          className="link"
        >
          <Typography variant="subtitle2" fontWeight="bold" color="var(--gray)">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: "1.2rem", color: "var(--gray)", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export { VideoCard };
