import React from "react";
import { Container, Typography } from "@mui/material";
import VerticalNavbar from "./Sidebar";
import SignUp from "./SignUp";
import HeaderCommon from "../pages/HeaderCommon";
function User() {
  return (
    <>
      <HeaderCommon title="Sign Up" />
      <Container maxWidth="xs">
        <VerticalNavbar />
        <Typography variant="h4" align="center" gutterBottom></Typography>
        <SignUp />
      </Container>
    </>
  );
}

export default User;
