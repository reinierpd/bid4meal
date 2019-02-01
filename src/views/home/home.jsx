import React from "react";
import Container from "react-bootstrap/Container";
import Booking from "components/booking";

const Home = () => (
  <Container>
    <h1 className="display-4">My Booking</h1>
    <hr className="my-4" />
    <Booking />
  </Container>
);

export default Home;
