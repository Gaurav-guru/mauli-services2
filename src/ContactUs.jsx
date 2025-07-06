import * as React from "react";
import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import TvRepairForm from "./TvRepairForm"; // Make sure this is the updated WhatsApp version

const ContactUs = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      {/* Title Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#E0DCC8",
          padding: "20px",
          borderRadius: "8px",
          mb: 3,
          mt: 5,
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="black"
          sx={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* Main Section */}
      <Container
        id="contact-section"
        maxWidth="lg"
        sx={{
          py: 5,
          backgroundColor: "#E0DCC8",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: 10,
          mb: 10,
          overflowX: "hidden",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Info Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                mb: 5,
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.2rem", color: "#333" }}
              >
                If you have any questions or would like to schedule a repair appointment,
                please don't hesitate to reach out to us. Our team is always here to
                assist you and provide the best possible service.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  mt: 2,
                  gap: 1.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WhatsAppIcon sx={{ mr: 1, color: "green", fontSize: "2rem" }} />
                  <a
                    href="https://wa.me/918007113950"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#003366" }}
                  >
                    Contact us on WhatsApp
                  </a>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon sx={{ mr: 1, color: "#007bff", fontSize: "2rem" }} />
                  <a
                    href="tel:+918007113950"
                    style={{ textDecoration: "none", color: "#003366" }}
                  >
                    Call Us: +91 8007113950
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* TV Repair Form Section */}
          <Grid item xs={12} md={6}>
            <TvRepairForm />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ContactUs;
