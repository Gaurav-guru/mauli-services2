import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const AboutSection = () => {
  return (
    <Container
      id="about-section"
      maxWidth="lg"
      sx={{
        py: 8,
        mt: 5,
        mb: 5,
        backgroundColor: "#E0DCC8",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: "#003366", fontWeight: "bold" }}
        >
          About Us
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center">
        {/* Text Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#333", fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            Our LED TV Service Center has been providing exceptional repair services in Pune for
            over a decade. We pride ourselves on our team of skilled technicians who are
            dedicated to restoring your TV to its optimal condition.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#333", fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            With a focus on quality, reliability, and customer satisfaction, we have built a
            reputation as one of the most trusted LED TV repair service providers in the region.
            Our commitment to using the latest tools and techniques ensures that we can handle
            any TV issue, from screen malfunctions to software glitches.
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src="https://img.freepik.com/free-vector/illustrated-people-renovating-living-room_23-2148677770.jpg"
              alt="About Us"
              style={{
                width: '100%',
                maxWidth: '100%',
                borderRadius: '10px',
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
