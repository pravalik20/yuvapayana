import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import karanataka from "../Video/karanataka.mp4";

const Enquirybox = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [guests, setGuests] = useState(1);

  const locations = [
    "Hampi",
    "Udupi",
    "Mysore",
    "Coorg",
    "Chikkamagaluru",
    "Uttara Kannada",
    "Mangaluru",
    "Bagalkot",
    "Hassan",
    "Bijapur",
  ];

  const bookingTypes = [
    "Adventure",
    "Beach",
    "Discovery",
    "Mountain Biking",
    "Camping",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: {
          xs: "70vh",
          sm: "80vh",
          md: "100vh",
        },
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: -1,
        }}
      >
        <source src={karanataka} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: {
              xs: "30px",
              sm: "42px",
              md: "60px",
            },
            mb: 1,
          }}
        >
          Book a Tour with Us
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "13px",
              sm: "15px",
              md: "18px",
            },
            maxWidth: "700px",
            mb: 4,
            px: 2,
          }}
        >
          I’d say, don’t think much, just pack your bags, put on your boots
          and board that bus. Let’s go, Amigos!!
        </Typography>

        {/* Enquiry Box */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "14px",
            padding: {
              xs: "14px",
              md: "18px",
            },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            width: {
              xs: "92%",
              sm: "88%",
              md: "80%",
            },
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          {/* Destination */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="success" />

            <TextField
              select
              label="Destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="standard"
              sx={{
                minWidth: {
                  xs: "120px",
                  sm: "140px",
                },
              }}
            >
              {locations.map((loc, index) => (
                <MenuItem key={index} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Activity */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SportsSoccerIcon color="success" />

            <TextField
              select
              label="Activity"
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
              variant="standard"
              sx={{
                minWidth: {
                  xs: "110px",
                  sm: "130px",
                },
              }}
            >
              {bookingTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EventIcon color="success" />

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              customInput={
                <TextField
                  label="Date"
                  variant="standard"
                  sx={{ width: "120px" }}
                />
              }
            />
          </Box>

          {/* Guests */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GroupIcon color="success" />

            <TextField
              label="Guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              variant="standard"
              InputProps={{
                inputProps: { min: 1 },
              }}
              sx={{ width: "80px" }}
            />
          </Box>

          {/* Button */}
          <Button
            variant="contained"
            color="success"
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            Enquire Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Enquirybox;