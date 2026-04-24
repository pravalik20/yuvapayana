import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hiking from "../Images/hiking.jpeg";
import snorkeling from "../Images/snorkeling.jpeg";
import paragliding from "../Images/paragliding.jpg";
import rafting from "../Images/rafting.jpg";
import kayak from "../Images/kayak.webp";
import surf from "../Images/surf.jpg";
import camp from "../Images/camp.jpeg";

const activities = [
  {
    title: "Mountain Hiking",
    image: hiking,
    description: "Conquer scenic trails and breathtaking peaks.",
  },
  {
    title: "Scuba Diving",
    image: snorkeling,
    description: "Explore the vibrant marine life up close.",
  },
  {
    title: "Paragliding",
    image: paragliding,
    description: "Fly high and experience ultimate freedom.",
  },
  {
    title: "River Rafting",
    image: rafting,
    description: "Ride thrilling rapids and cascading waterfalls.",
  },
  {
    title: "Kayaking",
    image: kayak,
    description: "Exploring waterways with exhilarating paddles.",
  },
  {
    title: "Surfing",
    image: surf,
    description: "Riding waves with graceful skill.",
  },
  {
    title: "Camping",
    image: camp,
    description: "Experience tranquility in the great outdoors.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 800,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false,
        variableWidth: false,
      },
    },
  ],
};

const Activities = () => {
  const customCSS = `
    .slick-slider {
      overflow: visible;
    }

    .slick-list {
      overflow: hidden !important;
      margin: 0 -8px !important; /* Negative margin to compensate for card padding */
    }

    .slick-track {
      display: flex !important;
      align-items: stretch !important;
    }

    .slick-slide {
      display: flex !important;
      justify-content: center;
      height: auto;
      padding: 0 8px !important; /* Add horizontal padding between slides */
    }

    .slick-slide > div {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .slick-prev,
    .slick-next {
      z-index: 20;
      width: 40px;
      height: 40px;
    }

    .slick-prev {
      left: -5px !important;
    }

    .slick-next {
      right: -5px !important;
    }

    .slick-prev:before,
    .slick-next:before {
      font-size: 30px;
      color: #333 !important;
      opacity: 0.8;
    }

    /* Mobile-specific adjustments */
    @media (max-width: 600px) {
      .slick-list {
        margin: 0 -4px !important;
      }
      
      .slick-slide {
        padding: 0 4px !important;
      }
      
      .slick-prev {
        left: 0px !important;
      }

      .slick-next {
        right: 0px !important;
      }
      
      .slick-prev:before,
      .slick-next:before {
        font-size: 24px;
      }
    }
  `;

  return (
    <Box
      sx={{
        backgroundColor: "#e0f7fa",
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 5 },
        overflow: "hidden",
        mt: {
          xs: "90px",
          sm: "110px",
          md: "40px",
        },
      }}
    >
      <style>{customCSS}</style>

      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          fontSize: {
            xs: "1.75rem",
            sm: "2.5rem",
            md: "3rem",
          },
        }}
      >
        Activities & Adventures
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 }, // Add padding to contain arrows
        }}
      >
        <Slider {...sliderSettings}>
          {activities.map((activity, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Card
  sx={{
    width: {
      xs: "85vw",
      sm: "320px",
      md: "340px",
    },
    borderRadius: "24px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  }}
>
                <CardMedia
                  component="img"
                  image={activity.image}
                  alt={activity.title}
                  sx={{
                    height: {
                      xs: "200px", // Smaller height on mobile
                      sm: "220px",
                      md: "260px",
                    },
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />

                <CardContent
                  sx={{
                    textAlign: "center",
                    px: { xs: 2, sm: 3 },
                    py: { xs: 2, sm: 3 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1, // Take remaining space
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                      },
                    }}
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: {
                        xs: "0.875rem",
                        sm: "1rem",
                      },
                    }}
                  >
                    {activity.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Activities;