import React from "react";
import VerticalNavbar from "./Sidebar";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="xs">
      <VerticalNavbar />
      <Typography variant="h4" align="center" gutterBottom>
        {/* Dashboard Items here */}
      </Typography>
    </Container>
  );
};

export default Dashboard;
