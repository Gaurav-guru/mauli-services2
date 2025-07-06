import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from "@mui/material";
import LED from "./led.jpg";
import LcD from "./lcd.jpg";
import TvInstallation from "./Tvinstallation.jpg";

const ServicesSection = () => {
  return (
    <Container id="services-section" maxWidth="lg" sx={{ py: 5, mt: 5, mb: 5}}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#003366", fontWeight: "bold" }}>
          Our Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia component="img" alt="LED TV Repair" height="200" image={LED} />
            <CardContent sx={{ textAlign: "center", backgroundColor: '#E0DCC8' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#003366", fontWeight: "bold" }}
              >
                LED TV Repair Services
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#666" }}>
                We specialize in providing comprehensive repair services for LED TVs in Pune.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: "#003366", "&:hover": { backgroundColor: "#002244" } }}
                href="tel:+918007113950"
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia component="img" alt="LCD TV Repair" height="200" image={LcD} />
            <CardContent sx={{ textAlign: "center", backgroundColor: '#E0DCC8'  }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#003366", fontWeight: "bold" }}
              >
                LCD TV Repair Services
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#666" }}>
                Our experts handle screen repair and replacement, restoring your TV's display.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: "#003366", "&:hover": { backgroundColor: "#002244" } }}
                href="tel:+918007113950"
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              boxShadow: 3,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia component="img" alt="TV Repair Service" height="200" image={TvInstallation} />
            <CardContent sx={{ textAlign: "center", backgroundColor: '#E0DCC8'  }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#003366", fontWeight: "bold" }}
              >
                TV Installation Service
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: "#666" }}>
                We handle everything from installation to complete repairing service.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, backgroundColor: "#003366", "&:hover": { backgroundColor: "#002244" } }}
                href="tel:+918007113950"
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesSection;
