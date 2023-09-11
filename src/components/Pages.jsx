import React from "react";
import VerticalNavbar from "./Sidebar";
import { Container, Typography } from "@mui/material";
import AllPages from "../pages/AllPages";
import HeaderCommon from "../pages/HeaderCommon";
function Pages() {
  return (
    <>
      <HeaderCommon title="All Pages" />
      <Container maxWidth="xs">
        <VerticalNavbar />
        <Typography variant="h4" align="center" gutterBottom>
          <AllPages />
        </Typography>
      </Container>
    </>
  );
}

export default Pages;
