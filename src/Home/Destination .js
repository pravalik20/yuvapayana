import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import camp from "../Images/camp.jpeg";
import chick from "../Images/chick.jpg";
import coorg from "../Images/coorg.jpeg";
import hampi from "../Images/hampi.jpeg";
import world from "../Images/world.png";

const destinations = [
  { name: "Gujarat", image: camp },
  { name: "Maharashtra", image: chick },
  { name: "Tamil Nadu", image: coorg },
  { name: "Karnataka", image: hampi },
];

const DestinationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={containerStyle}>
      {/* Left Content */}
      <Box sx={headerContainerStyle}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "28px",
              md: "42px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Popular Destinations
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#555",
            fontSize: {
              xs: "14px",
              md: "18px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Get up to 40% discount on your next trip
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "flex-start",
            },
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              borderRadius: "8px",
              px: 3,
              py: 1,
              textTransform: "none",
            }}
          >
            Enquire Now
          </Button>
        </Box>
      </Box>

      {/* Scroll Cards */}
      <Box
        sx={scrollContainerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            ...scrollContentStyle,
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {[...destinations, ...destinations].map((destination, index) => (
            <Box key={index} sx={cardStyle}>
              <img
                src={destination.image}
                alt={destination.name}
                style={imageStyle}
              />

              <Box sx={overlayStyle}>
                <Typography sx={nameStyle}>
                  {destination.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
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
  alignItems: "center",
  justifyContent: "space-between",
  gap: {
    xs: 4,
    md: 6,
  },
  px: {
    xs: 2,
    md: 6,
  },
  py: 6,
  backgroundImage: `url(${world})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

const headerContainerStyle = {
  width: {
    xs: "100%",
    md: "30%",
  },
};

const scrollContainerStyle = {
  width: {
    xs: "100%",
    md: "70%",
  },
  overflow: "hidden",
  position: "relative",
};

const scrollContentStyle = {
  display: "flex",
  width: "max-content",
  animation: "scroll 18s linear infinite",
};

const cardStyle = {
  width: {
    xs: "180px",
    sm: "220px",
    md: "260px",
  },
  height: {
    xs: "240px",
    sm: "280px",
    md: "320px",
  },
  mx: 1.5,
  borderRadius: "14px",
  overflow: "hidden",
  position: "relative",
  flexShrink: 0,
  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlayStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0,0,0,0.45)",
  py: 1.5,
  textAlign: "center",
};

const nameStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: {
    xs: "14px",
    md: "18px",
  },
};

const styles = `
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default DestinationPage;