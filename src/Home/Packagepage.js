import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import hiking from "../Images/hiking.jpeg";
import camp from "../Images/camp.jpeg";
import coorg from "../Images/coorg.jpeg";
import beach from "../Images/Beach.jpg";
import paragliding from "../Images/paragliding.jpg";

const packages = [
  {
    title: "Uttari Betta Trek",
    image: hiking,
    duration: "1 Day Trek",
    category: "One Day Treks",
    link: "/uttari-betta",
    description:
      "Enjoy sunrise trekking, scenic landscapes, and adventure trails at Uttari Betta.",
  },
  {
    title: "Kabbaldurga Trek",
    image: camp,
    duration: "1 Day Trek",
    category: "One Day Treks",
    link: "/kabbaldurga",
    description:
      "Experience night trekking, breathtaking hilltop views, and an adventurous climb.",
  },
  {
    title: "Wayanad Trip",
    image: coorg,
    duration: "2 Day Package",
    category: "Monsoon Trips",
    link: "/wayanad",
    description:
      "Discover waterfalls, caves, wildlife, and lush green landscapes in Wayanad.",
  },
  {
    title: "Gokarna & Murdeshwara",
    image: beach,
    duration: "2 Day Beach Trip",
    category: "Western Ghats",
    link: "/gokarna-murdeshwara",
    description:
      "Relax on beaches, visit Murdeshwara Temple, and enjoy coastal beauty.",
  },
  {
    title: "Coorg Getaway",
    image: coorg,
    duration: "2 Day Package",
    category: "Monsoon Trips",
    link: "/coorg",
    description:
      "Explore coffee plantations, waterfalls, and scenic hill stations in Coorg.",
  },
  {
    title: "Ooty Tour",
    image: hiking,
    duration: "2 Day Package",
    category: "Monsoon Trips",
    link: "/ooty",
    description:
      "Visit tea gardens, lakes, and beautiful viewpoints in the Queen of Hills.",
  },
  {
    title: "Channarayana Durga Trek",
    image: camp,
    duration: "1 Day Trek",
    category: "One Day Treks",
    link: "/channarayana-durga",
    description:
      "A perfect trekking destination with fort ruins and scenic hilltop views.",
  },
  {
    title: "Skandagiri Trek",
    image: hiking,
    duration: "Night Trek",
    category: "One Day Treks",
    link: "/skandagiri",
    description:
      "Enjoy a famous sunrise trek above the clouds with a thrilling trail.",
  },
  {
    title: "Shivagange Trek",
    image: paragliding,
    duration: "1 Day Trek",
    category: "One Day Treks",
    link: "/shivagange",
    description:
      "Experience rocky trekking trails and panoramic views from Shivagange hills.",
  },
];

const categories = [
  "All Categories",
  "Monsoon Trips",
  "One Day Treks",
  "Western Ghats",
];

function Package() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  return (
    <Box
      sx={{
        backgroundColor: "#f5f9fb",
        py: 8,
        px: { xs: 2, md: 6 },
        width: "100%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 6,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Travel Packages
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 6,
        }}
      >
        <FormControl
          sx={{
            width: {
              xs: "90%",
              sm: "350px",
            },
          }}
        >
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{
              borderRadius: "15px",
              backgroundColor: "white",
              fontWeight: "bold",
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        {packages
          .filter((pkg) =>
            selectedCategory === "All Categories"
              ? true
              : pkg.category === selectedCategory
          )
          .map((pkg, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: {
                    xs: "90%",
                    sm: "270px",
                    md: "300px",
                  },
                  mx: "auto",
                  minHeight: "520px",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={pkg.image}
                  alt={pkg.title}
                  sx={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" mb={1}>
                    {pkg.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mb={1}
                  >
                    {pkg.duration}
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    {pkg.description}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(pkg.link)}
                    sx={{
                      mt: "auto",
                      backgroundColor: "#0a7cff",
                      borderRadius: "12px",
                      py: 1.2,
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Know More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Package;