import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

import surf from "../Images/surf.jpg";

const aboutContent = [
  "Yuva Payana was started with a simple but powerful vision — to bring together travel lovers, adventure seekers, and people who want to explore new places while creating meaningful memories.",

  "Our mission is to create unforgettable travel experiences that connect people through adventure, culture, and discovery. We believe travel should not just be about visiting places but about building friendships and lifelong memories.",

  "Yuva Payana focuses on organizing exciting trips, nature escapes, cultural explorations, and group adventures specially designed for young explorers who want to recharge and enjoy life.",

  "Every journey is carefully planned to give travelers comfort, excitement, and opportunities to meet like-minded people. Whether it is trekking, sightseeing, or weekend getaways, we make every trip memorable.",

  "At Yuva Payana, travel is more than just a destination — it is about experiences, stories, friendships, and discovering yourself through every journey.",
];

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 10,
        px: {
          xs: 2,
          sm: 4,
          md: 8,
        },
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={5}
      >
        {/* Title */}
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "34px",
                sm: "42px",
                md: "52px",
              },
            }}
          >
            About{" "}
            <span style={{ color: "red" }}>
              Yuva Payana
            </span>
          </Typography>
        </Grid>

        {/* Paragraphs */}
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              maxWidth: "1100px",
              mx: "auto",
            }}
          >
            {aboutContent.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "18px",
                  },
                  lineHeight: 2,
                  color: "#444",
                  mb: 3,
                  textAlign: "justify",
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Founder Cards */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: 4,
              mt: 3,
            }}
          >
            {/* Founder */}
            <Card
              sx={{
                width: {
                  xs: "100%",
                  sm: "320px",
                  md: "360px",
                },
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={surf}
                alt="Founder Gahana"
                sx={{
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Founder - Gahana
                </Typography>

                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  Gahana is passionate about travel, adventure, and creating
                  meaningful experiences for people who love exploring new
                  places. She brings creativity, energy, and vision to Yuva
                  Payana.
                </Typography>
              </CardContent>
            </Card>

            {/* Co-Founder */}
            <Card
              sx={{
                width: {
                  xs: "100%",
                  sm: "320px",
                  md: "360px",
                },
                borderRadius: "18px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={surf}
                alt="Co-Founder Pravalik"
                sx={{
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Co-Founder - Pravalik
                </Typography>

                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  Pravalik has a deep passion for travel, planning, and
                  creating enjoyable group experiences. She contributes fresh
                  ideas and dedication to making every journey memorable.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;