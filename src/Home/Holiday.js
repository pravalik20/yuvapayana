import React from "react";
import { Box, Typography } from "@mui/material";

// Images
import nature from "../Images/nature.jpg";
import chick from "../Images/chick.jpg";
import coorg from "../Images/coorg.jpeg";
import hampi from "../Images/hampi.jpeg";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "center",
        gap: {
          xs: 5,
          md: 8,
        },
        px: {
          xs: 2,
          md: 8,
        },
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "45%",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={nature}
          alt="Tourism background"
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            borderRadius: "14px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
          }}
        />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "52px",
            },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Let us plan you a{" "}
          <span style={{ color: "orange" }}>
            perfect Holiday
          </span>
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "#666",
            fontSize: {
              xs: "14px",
              md: "18px",
            },
            mb: 4,
            maxWidth: {
              xs: "100%",
              md: "550px",
            },
          }}
        >
          Custom-Crafted Tour Packages for Unforgettable Holiday
          Experiences in India.
        </Typography>

        {/* Package Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              md: "flex-start",
            },
            gap: 3,
          }}
        >
          {/* Wildlife */}
          <Box sx={packageStyle}>
            <img src={chick} alt="Wildlife" style={imageStyle} />

            <Typography sx={titleStyle}>
              Wildlife
            </Typography>

            <Typography sx={packageCountStyle}>
              70+ Packages
            </Typography>
          </Box>

          {/* Heritage */}
          <Box sx={packageStyle}>
            <img src={coorg} alt="Heritage" style={imageStyle} />

            <Typography sx={titleStyle}>
              Heritage
            </Typography>

            <Typography sx={packageCountStyle}>
              25+ Packages
            </Typography>
          </Box>

          {/* Trekking */}
          <Box sx={packageStyle}>
            <img src={hampi} alt="Trekking" style={imageStyle} />

            <Typography sx={titleStyle}>
              Trekking
            </Typography>

            <Typography sx={packageCountStyle}>
              70+ Packages
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const packageStyle = {
  width: {
    xs: "140px",
    sm: "160px",
  },
  textAlign: "center",
  borderRadius: "14px",
  backgroundColor: "white",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  transition: "0.3s ease",

  "&:hover": {
    transform: "translateY(-5px)",
  },
};

const imageStyle = {
  width: "100%",
  height: "110px",
  objectFit: "cover",
};

const titleStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  mt: 1.5,
};

const packageCountStyle = {
  color: "#777",
  fontSize: "14px",
  pb: 2,
};

export default App;