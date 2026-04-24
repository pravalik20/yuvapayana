import React, { useState, useEffect } from "react";
import { Typography, Grid, Box } from "@mui/material";

// Importing images
import Image1 from "../Images/camp.jpeg"; // Replace with actual image paths
import Image2 from "../Images/chick.jpg";
import Image3 from "../Images/coorg.jpeg";
import Image4 from "../Images/hampi.jpeg";

const RailParkPage = () => {
  // Array of imported images
  const images = [Image1, Image2, Image3, Image4];
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 90); // Rotate 90 degrees every 3 seconds
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Inline styles
  const styles = {
    gridContainer: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f8f8",
      padding: "10px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns: 1 for text and 1 for carousel
      gap: "50px",
      alignItems: "center",
      height: "60vh",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    carouselContainer: {
      position: "relative",
      width: "400px",
      height: "400px",
      margin: "auto",
      borderRadius: "50%",
      transform: `rotate(${rotation}deg)`, // Rotate the container for revolution
      transition: "transform 1s ease-in-out", // Smooth transition
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: (index) => ({
      position: "absolute",
      width: "100px",
      height: "100px",
      borderRadius: "10px",
      transform: `rotate(${index * (360 / images.length)}deg) 
        translate(150px) 
        rotate(-${index * (360 / images.length)}deg)`, // Keeps images upright
      transformOrigin: "center center",
    }),
  };

  return (
    <Box sx={styles.gridContainer}>
      {/* Text Content */}
      <Grid container direction="column" justifyContent="center" sx={styles.content}>
        <Typography variant="body1" sx={{ color: "#666", marginBottom: "10px" }}>
          Behind the Rail Park there are people. Real people.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
          We’re on a mission to bring the Rail Park to life.
        </Typography>
      </Grid>

      {/* Rotating Image Carousel */}
      <Box sx={styles.carouselContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel ${index}`}
            style={styles.image(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RailParkPage;
