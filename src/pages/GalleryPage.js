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

const ExplorationPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={0.5} />
      <Grid item xs={11}>
        <ImageList variant="masonry" cols={4} gap={20}>
          {imageData.map((item) => (
            <Box sx={{ mb: 2 }}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=300&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: "20px" }}
                />
                <ImageListItemBar
                  style={{
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Box>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={0.5} />
    </Grid>
  );
};

export default ExplorationPage;
