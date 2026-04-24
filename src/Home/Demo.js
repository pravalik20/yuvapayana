import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import "../App.css";

const AdventurePage = () => {
  return (
    <Grid
      container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "80px",
        },
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      {/* Full Width Content */}
      <Grid item xs={12} md={10}>
        {/* Title */}
        <Typography
          variant="subtitle1"
          sx={{
            color: "#8dc63f",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Who We Are
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#333",
            fontWeight: "bold",
            marginBottom: "40px",
            lineHeight: "1.3",
          }}
        >
          Great opportunity for adventure & travels
        </Typography>

        {/* Features */}
        <Grid
          container
          direction="column"
          spacing={4}
          sx={{
            position: "relative",
          }}
        >
          {/* Feature 1 */}
          <Grid item>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box
                sx={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "#d9d9d2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                }}
              >
                🦺
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Safety First Always
                </Typography>

                <Typography color="text.secondary">
                  Set perspiciatis unde omnis estenatus voluptatem totarem
                  aperiae.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Divider */}
          <Box
            sx={{
              borderLeft: "3px dotted #ddd",
              height: "60px",
              marginLeft: "26px",
            }}
          />

          {/* Feature 2 */}
          <Grid item>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box
                sx={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "#d9d9d2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                }}
              >
                💲
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Low Price & Friendly
                </Typography>

                <Typography color="text.secondary">
                  Quis autem vel eum iure voluptate velit esse nihilie
                  consequatur.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Divider */}
          <Box
            sx={{
              borderLeft: "3px dotted #ddd",
              height: "60px",
              marginLeft: "26px",
            }}
          />

          {/* Feature 3 */}
          <Grid item>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box
                sx={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "#d9d9d2",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                }}
              >
                ✈️
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Trusted Travel Guide
                </Typography>

                <Typography color="text.secondary">
                  At vero accusamus dignissimos ducimus blanditiis deleniti
                  atque quos.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdventurePage;