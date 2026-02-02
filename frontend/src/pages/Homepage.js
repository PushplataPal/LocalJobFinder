import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, TextField, Grid, Paper, Box } from "@mui/material";
import { FaBolt, FaCar, FaBroom, FaUtensils, FaTools, FaHammer } from "react-icons/fa";

const categories = [
  { id: "electrician", label: "Electrician", Icon: FaBolt },
  { id: "plumber", label: "Plumber", Icon: FaTools },
  { id: "carpenter", label: "Carpenter", Icon: FaHammer },
  { id: "driver", label: "Driver", Icon: FaCar },
  { id: "cleaner", label: "Cleaner", Icon: FaBroom },
  { id: "cook", label: "Cook", Icon: FaUtensils },
];

export default function Homepage() {
  const navigate = useNavigate();

  const goCategory = (id) => {
    // navigate to jobs page with query param
    navigate(`/jobs?category=${encodeURIComponent(id)}`);
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      <AppBar position="static" color="primary" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Local Job Finder
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Local Job Finder
        </Typography>

        <TextField
          fullWidth
          placeholder="Search for jobs or workers..."
          variant="outlined"
          size="large"
          sx={{ mb: 4, bgcolor: "white", borderRadius: 1 }}
        />

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Categories
        </Typography>

        <Grid container spacing={2}>
          {categories.map((c) => (
            <Grid item key={c.id} xs={12} sm={6} md={4}>
              <Paper
                elevation={2}
                onClick={() => goCategory(c.id)}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  p: 2,
                  cursor: "pointer",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                }}
              >
                <Box sx={{ fontSize: 28, color: "primary.main" }}>
                  <c.Icon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {c.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Local & verified
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

