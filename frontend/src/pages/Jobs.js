import React, { useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Grid, Box } from "@mui/material";
import JobCard from "../components/JobCard";

// sample jobs (use backend later)
const ALL_JOBS = [
  { id: 1, category: "electrician", title: "Fix Home Wiring", worker: "Raghu Kumar", location: "Vijaynagar", experience: "5 yrs", charges: "₹800 per day", availability: "Today", phone: "9876500001" },
  { id: 2, category: "plumber", title: "Household Plumbing", worker: "Suresh", location: "Kakadeo", experience: "4 yrs", charges: "₹700 per day", availability: "Tomorrow", phone: "9876500002" },
  { id: 3, category: "driver", title: "Delivery Driver Required", worker: "Amit", location: "Panki", experience: "3 yrs", charges: "₹600 per day", availability: "Today", phone: "9876500003" },
  { id: 4, category: "cook", title: "Home Cook & Tiffin", worker: "Sunita Devi", location: "Bhauti", experience: "6 yrs", charges: "₹1000 per day", availability: "Weekdays", phone: "9876500004" },
  { id: 5, category: "carpenter", title: "Furniture Repair", worker: "Manoj", location: "Govind Nagar", experience: "7 yrs", charges: "₹900 per day", availability: "Next week", phone: "9876500005" },
  { id: 6, category: "cleaner", title: "House Cleaner", worker: "Laxmi", location: "Panki", experience: "2 yrs", charges: "₹400 per day", availability: "Today", phone: "9876500006" },
];

export default function Jobs() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || ""; // e.g. "electrician"

  const jobs = useMemo(() => {
    if (!category) return ALL_JOBS;
    return ALL_JOBS.filter((j) => j.category.toLowerCase() === category.toLowerCase());
  }, [category]);

  const onView = (job) => {
    // open job-details page (could pass state or job id)
    navigate(`/job/${job.id}`, { state: job });
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Local Job Finder</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} jobs` : "Available Jobs"}
        </Typography>

        <Grid container spacing={3}>
          {jobs.length ? (
            jobs.map((job) => (
              <Grid key={job.id} item xs={12} sm={6} md={4}>
                <JobCard job={job} onView={onView} />
              </Grid>
            ))
          ) : (
            <Typography variant="body1">No jobs found for this category.</Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
