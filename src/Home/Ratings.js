import React from "react";
import { Box, Typography, Button } from "@mui/material";

import bijapur from "../Images/bijapur.jpeg";
import coorg from "../Images/coorg.jpeg";
import hampi from "../Images/hampi.jpeg";

const TourismShowcase = () => {
  return (
    <Box sx={containerStyle}>
      {/* Images Section */}
      <Box sx={imageGalleryStyle}>
        <Box
          component="img"
          src={bijapur}
          alt="Landscape 1"
          sx={{
            ...galleryImageStyle,
            left: {
              xs: "0px",
              md: "0px",
            },
            zIndex: 3,
            height: {
              xs: "180px",
              md: "250px",
            },
          }}
        />

        <Box
          component="img"
          src={coorg}
          alt="Landscape 2"
          sx={{
            ...galleryImageStyle,
            left: {
              xs: "70px",
              md: "110px",
            },
            zIndex: 2,
            height: {
              xs: "165px",
              md: "230px",
            },
            mt: {
              xs: 1,
              md: 2,
            },
          }}
        />

        <Box
          component="img"
          src={hampi}
          alt="Landscape 3"
          sx={{
            ...galleryImageStyle,
            left: {
              xs: "140px",
              md: "220px",
            },
            zIndex: 1,
            height: {
              xs: "150px",
              md: "210px",
            },
            mt: {
              xs: 2,
              md: 3,
            },
          }}
        />
      </Box>

      {/* Text Content */}
      <Box sx={textContentStyle}>
        <Typography sx={headingStyle}>
          INCREDIBLE Karnataka
        </Typography>

        {/* Stats */}
        <Box sx={statsStyle}>
          <Box sx={statBoxStyle}>
            <Typography sx={statNumberStyle}>
              30K+
            </Typography>

            <Typography sx={statTextStyle}>
              Happy Travelers
            </Typography>
          </Box>

          <Box sx={statBoxStyle}>
            <Typography sx={statNumberStyle}>
              20K+
            </Typography>

            <Typography sx={statTextStyle}>
              Trips Completed
            </Typography>
          </Box>

          <Box sx={statBoxStyle}>
            <Typography sx={statNumberStyle}>
              90%
            </Typography>

            <Typography sx={statTextStyle}>
              Positive Reviews
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          sx={{
            mt: 3,
            borderColor: "#333",
            color: "#333",
            px: 3,
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",

            "&:hover": {
              backgroundColor: "#333",
              color: "white",
            },
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  justifyContent: "center",
  alignItems: "center",
  gap: {
    xs: 8,
    md: 12,
  },
  px: {
    xs: 2,
    md: 8,
  },
  py: 10,
  backgroundColor: "#f5f5f5",
  overflow: "hidden",
};

const imageGalleryStyle = {
  position: "relative",
  width: {
    xs: "280px",
    md: "420px",
  },
  height: {
    xs: "230px",
    md: "300px",
  },
};

const galleryImageStyle = {
  position: "absolute",
  top: 0,
  width: {
    xs: "120px",
    md: "200px",
  },
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  transition: "0.4s ease",
};

const textContentStyle = {
  width: {
    xs: "100%",
    md: "45%",
  },
  textAlign: {
    xs: "center",
    md: "left",
  },
};

const headingStyle = {
  fontWeight: "bold",
  fontSize: {
    xs: "34px",
    md: "52px",
  },
  mb: 4,
};

const statsStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: {
    xs: "center",
    md: "space-between",
  },
  gap: 3,
};

const statBoxStyle = {
  textAlign: "center",
};

const statNumberStyle = {
  fontSize: {
    xs: "28px",
    md: "34px",
  },
  fontWeight: "bold",
};

const statTextStyle = {
  color: "#777",
  fontSize: "14px",
};

export default TourismShowcase;