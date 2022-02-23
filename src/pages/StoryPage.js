import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardHeader } from "@mui/material";
import { imageData } from "../database/ImageData";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HoverRating from "./HoverRating";
const StoryPage = () => {
  const { storyId } = useParams();

  const story = imageData.filter((story) => story.id == storyId)[0];
  console.log(story);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={0.5} />
        <Grid item xs={5.5}>
          {/* <img
            src={`${story.img}?w=500&fit=crop&auto=format`}
            srcSet={`${story.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
            alt={story.title}
            loading="lazy"
            style={{ borderRadius: "20px" }}
          /> */}
          <img
            src={`${story.img}`}
            alt={story.title}
            loading="lazy"
            style={{ borderRadius: "20px", width: "100%" }}
          />
        </Grid>
        <Grid item xs={5.5}>
          <Card sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {story.title}
              </Typography>
              <Typography variant="body2">{story.content}</Typography>
              <HoverRating ratings={story.ratings} />
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={0.5} />
      </Grid>
    </Box>
  );
};

export default StoryPage;
