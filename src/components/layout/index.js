import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Container } from "./layout.styles";

export default function Layout({ title, children }) {
  document.title = `${title} - Pokemon App` || "Default";

  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
