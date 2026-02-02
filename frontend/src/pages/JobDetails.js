import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function JobDetails() {
  const { state: job } = useLocation();
  const navigate = useNavigate();

  if (!job) {
    return <Container sx={{ py: 6 }}>No job selected.</Container>;
  }

  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Job Details</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>{job.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{job.worker} — {job.location}</Typography>

        <Box sx={{ mt: 3 }}>
          <Typography><strong>Experience:</strong> {job.experience}</Typography>
          <Typography><strong>Charges:</strong> {job.charges}</Typography>
          <Typography><strong>Availability:</strong> {job.availability}</Typography>
          <Typography><strong>Contact:</strong> {job.phone}</Typography>
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={() => window.open(`tel:${job.phone}`)}>Call</Button>
          <Button variant="outlined" onClick={() => alert("Booking flow - connect backend")}>Book Now</Button>
          <Button variant="text" onClick={() => navigate(-1)}>Back</Button>
        </Box>
      </Container>
    </Box>
  );
}

