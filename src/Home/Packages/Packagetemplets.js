import React from "react";
import logo from "../../Images/logo.jpg";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";

function PackageTemplate({
  title,
  image,
  duration,
  status,
  transportPrice,
  withoutTransport,
  bookingAmount,
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        minHeight: "100vh",
        py: 5,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Header */}
    <Box sx={{ textAlign: "center", mb: 4 }}>
  <img
    src={logo}
    alt="Yuva Payana"
    style={{
      width: "100px",
      marginBottom: "12px",
    }}
  />
        <Typography
          sx={{
            letterSpacing: "4px",
            color: "#4a6cf7",
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          BOOKING PORTAL
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mt: 1,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Yuva Payana
        </Typography>
      </Box>

      {/* Main Card */}
      <Card
        sx={{
          maxWidth: "850px",
          mx: "auto",
          borderRadius: "25px",
          p: { xs: 2, md: 4 },
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.8rem", md: "2.3rem" },
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#4a6cf7",
                fontWeight: "bold",
                mt: 2,
                fontSize: "18px",
              }}
            >
              Current Status : {status}
            </Typography>
          </Box>

          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: { xs: "100%", md: "250px" },
              maxWidth: "250px",
              height: "200px",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Details */}
        <CardContent sx={{ px: 0 }}>
          <Typography
            sx={{
              mb: 3,
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            ⏰ {duration}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
            }}
          >
            <Typography>With Transportation</Typography>
            <Typography fontWeight="bold">
              {transportPrice}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
            }}
          >
            <Typography>Without Transportation</Typography>
            <Typography fontWeight="bold">
              {withoutTransport}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1.5,
            }}
          >
            <Typography>Booking Amount</Typography>
            <Typography fontWeight="bold">
              {bookingAmount}
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 4,
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            GST (Exclusive of Price) — 5%
          </Typography>

          {/* Buttons */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.8,
              borderRadius: "12px",
              backgroundColor: "#2fb344",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            BOOK DATES
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              py: 1.8,
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            SEND ENQUIRY
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PackageTemplate;