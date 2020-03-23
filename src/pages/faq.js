import React from "react";
import FAQCard from "../components/FAQCard";
import Sidebar from "../components/sidebar";
import "./faq.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container>
      <Row>
        <Col md='3'>
          <Sidebar />
        </Col>
        <Col md='9'>
          <FAQCard />
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
