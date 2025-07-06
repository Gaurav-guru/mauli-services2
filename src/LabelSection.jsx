import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const LabelSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        px: 2,
        py: 3,
        backgroundColor: "#E0DCC8",
        mx: "auto",
        maxWidth: "100%",
        overflowX: "hidden", // ✅ Ensures content doesn't overflow horizontally
      }}
    >
      {/* Happy Customers */}
      <Box sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}>
        <PersonIcon sx={{ color: "orange", fontSize: 48 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "orange" }}>
          332,444 +
        </Typography>
        <Typography variant="body1">Happy Customers</Typography>
      </Box>

      {/* Rating */}
      <Box sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}>
        <StarIcon sx={{ color: "orange", fontSize: 48 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "orange" }}>
          4.4
        </Typography>
        <Typography variant="body1">Average Rating</Typography>
      </Box>

      {/* Technicians */}
      <Box sx={{ textAlign: "center", mb: { xs: 2, md: 0 } }}>
        <ShieldIcon sx={{ color: "orange", fontSize: 48 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "orange" }}>
          Experienced Technician
        </Typography>
        <Typography variant="body1">Only</Typography>
      </Box>

      {/* Satisfaction */}
      <Box sx={{ textAlign: "center" }}>
        <ThumbUpIcon sx={{ color: "orange", fontSize: 48 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "orange" }}>
          100%
        </Typography>
        <Typography variant="body1">Customer Satisfaction</Typography>
      </Box>
    </Box>
  );
};

export default LabelSection;
