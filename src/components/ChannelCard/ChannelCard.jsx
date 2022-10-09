import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "35rem", md: "32rem" },
        margin: "auto",
        backgroundColor: "transparent",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`} className="link">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "var(--white)",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.default?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "18rem",
              width: "18rem",
              mb: "1.6rem",
              border: "1px solid var(--border)",
              backgroundColor: "var(--black)",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: "1.4rem", color: "var(--gray)", ml: "5px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export { ChannelCard };
