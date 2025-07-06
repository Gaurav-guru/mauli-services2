import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import repairTvImage from "./repairing.avif";

const HomeSection = () => {
  return (
    <Container
      id="home-section"
      maxWidth="lg"
      sx={{
        py: 4,
        mt: 3,
        mb: 5,
        backgroundColor: "#E0DCC8",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflowX: "hidden", // ✅ Prevent horizontal scroll
      }}
    >
      {/* Mobile No: Top-Right */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#4a4a4a",
          fontSize: "0.85rem",
          fontWeight: "bold",
          maxWidth: "90%", // ✅ Avoid overflow
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Mobile No: 8007113950
      </Box>

      <Box sx={{ height: 50 }} />

      <Grid container spacing={4} alignItems="center">
        {/* Left Side Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#003366", fontWeight: "bold", fontSize: "2.5rem" }}
          >
            Best LED TV Service Center In Pune
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#4a4a4a", fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            At our LED TV Service Center, we offer top-notch repair services for all types of LED TVs, ensuring reliability and expert solutions to keep your TV working like new.
          </Typography>

          {/* Button Group */}
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
            <a
              href="https://wa.me/918007113950"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#28a745",
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#218838" },
                }}
              >
                Contact Us
              </Button>
            </a>
            <a href="tel:+918007113950" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#dc3545",
                  color: "#dc3545",
                  fontWeight: "bold",
                  "&:hover": { borderColor: "#c82333", color: "#c82333" },
                }}
              >
                Call Us
              </Button>
            </a>
          </Box>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: { xs: 4, md: 0 } }}>
            <img
              src={repairTvImage}
              alt="Repairing TV"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeSection;
