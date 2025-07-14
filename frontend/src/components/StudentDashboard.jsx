import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import ClassIcon from "@mui/icons-material/Class";
import LogoutIcon from "@mui/icons-material/Logout";

const StudentDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/student-login");
  };

  if (!student) {
    return (
      <Container>
        <Typography variant="h5" color="error" mt={5}>
          Unauthorized Access! Please login again.
        </Typography>
        <Button onClick={() => navigate("/student-login")} variant="contained" sx={{ mt: 2 }}>
          Go to Login
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Student Dashboard
      </Typography>
      <Card sx={{ mb: 3, backgroundColor: "#f9f9f9", boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SchoolIcon color="primary" />
            </Grid>
            <Grid item xs>
              <Typography variant="h6">Name: {student.stdName}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item>
              <EmailIcon color="secondary" />
            </Grid>
            <Grid item xs>
              <Typography>Email: {student.email}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item>
              <ClassIcon sx={{ color: "#9c27b0" }} />
            </Grid>
            <Grid item xs>
              <Typography>Department: {student.dept}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" mt={1}>
            <Grid item>
              <Typography variant="body1" fontWeight="bold">
                Batch:
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography>{student.batch}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="error"
        fullWidth
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default StudentDashboard;
