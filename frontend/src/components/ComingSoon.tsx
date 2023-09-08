import React from "react";
import comingSoonImage from "../images/comming-soon.png"; // Adjust the path to point to your image file
import Container from "@mui/material/Container";

const ComingSoon: React.FC = () => (
  <Container
    maxWidth="md"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <img
      src={comingSoonImage}
      alt="Coming Soon"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </Container>
);

export default ComingSoon;
