import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { imageData } from "../database/ImageData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { borderRadius, spacing } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const ExplorationPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Link to = "/createStory">
      <Fab color="primary" aria-label="add" sx = {{mb : 2, mt : 2, ml : 180, mr : 2 }} > 
      <AddIcon/> 
      </Fab>
      </Link>
      <Grid container spacing={1} styled = {{color : "#FFF8E7"}}>
        <Grid item xs={0.5} />
        <Grid item xs={11}>
          <ImageList variant="masonry" cols={4} gap={20}>
            {imageData.map((story) => (
              <Box sx={{ mb: 2 }}>
                <Link to={`/story/${story.id}`}>
                  <ImageListItem key={story.img}>
                    <img
                      src={`${story.img}?w=300&fit=crop&auto=format`}
                      srcSet={`${story.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                      alt={story.title}
                      loading="lazy"
                      style={{ borderRadius: "20px" }}
                    />
                    <ImageListItemBar
                      style={{
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                      title={story.title}
                      subtitle={story.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${story.title}`}
                        >
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </Link>
              </Box>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={0.5} />
      </Grid>
      <Outlet />
    </Box>
    
  );
};

export default ExplorationPage;
