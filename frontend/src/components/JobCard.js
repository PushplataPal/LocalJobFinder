import React from "react";
import { Card, CardContent, Typography, Box, Button, CardActions } from "@mui/material";

export default function JobCard({ job, onView }) {
  // job: { id, title, worker, location, experience, charges, availability, phone }
  return (
    <Card elevation={3}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {job.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {job.worker} — {job.location}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Experience: <strong>{job.experience}</strong>
            </Typography>
            <Typography variant="body2">Charges: <strong>{job.charges}</strong></Typography>
            <Typography variant="body2">Availability: <strong>{job.availability}</strong></Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(`tel:${job.phone}`)}
        >
          Call
        </Button>

        <Button variant="outlined" color="primary" onClick={() => onView(job)}>
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}

