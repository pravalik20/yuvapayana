import React from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  Instagram,
  WhatsApp,
  YouTube,
  Telegram,
} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Explore from "../Images/explore.jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Explore})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          filter: "brightness(0.35)",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0,0,0,0.65)",
          padding: {
            xs: "30px 20px",
            sm: "35px 40px",
            md: "35px 60px",
          },
        }}
      >
        {/* Top Footer Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          {/* Contact + Location */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PhoneIcon sx={{ fontSize: "26px" }} />

              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "20px",
                  },
                  fontWeight: "600",
                }}
              >
                +91 7090037535
              </Typography>
            </Box>

            {/* Location */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <LocationOnIcon sx={{ fontSize: "26px" }} />

              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "18px",
                  },
                }}
              >
                Bangalore, Karnataka, India
              </Typography>
            </Box>
          </Box>

          {/* Social Media */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/yuva_payana?igsh=cGd6NXA1Zmk5a3ox"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Instagram
                sx={{
                  fontSize: "30px",
                  transition: "0.3s",
                  '&:hover': {
                    color: "#E1306C",
                  },
                }}
              />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/917090037535"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <WhatsApp
                sx={{
                  fontSize: "30px",
                  transition: "0.3s",
                  '&:hover': {
                    color: "#25D366",
                  },
                }}
              />
            </Link>

            {/* YouTube */}
            <Link href="#" color="inherit">
              <YouTube
                sx={{
                  fontSize: "30px",
                  transition: "0.3s",
                  '&:hover': {
                    color: "red",
                  },
                }}
              />
            </Link>

            {/* Telegram */}
            <Link href="#" color="inherit">
              <Telegram
                sx={{
                  fontSize: "30px",
                  transition: "0.3s",
                  '&:hover': {
                    color: "#0088cc",
                  },
                }}
              />
            </Link>
          </Box>
        </Box>

        {/* Bottom Text */}
        <Box
          sx={{
            marginTop: "30px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: "#ddd",
            }}
          >
            © 2026 Yuva Payana. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;