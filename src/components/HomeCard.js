import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

const HOME = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Row>
          <Col sm="6">
            <Card body style={{ minHeight: "350px", minWidth: "350px" }}>
              <CardTitle>
                <i class="fas fa-vial fa-4x"></i> Blood
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button tag={Link} to="/blood">
                >Go somewhere
              </Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{ minHeight: "350px", minWidth: "350px" }}>
              <CardTitle>
                <i class="far fa-calendar-alt fa-4x"></i> Event
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button tag={Link} to="/event">
                Go somewhere
              </Button>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6">
            <Card body style={{ minHeight: "350px", minWidth: "350px" }}>
              <CardTitle>
                <i class="fas fa-info-circle fa-4x"></i> FAQ
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button tag={Link} to="/faq">
                Go somewhere
              </Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body style={{ minHeight: "350px", minWidth: "350px" }}>
              <CardTitle>
                {" "}
                <i class="fas fa-search-location fa-4x"></i> Locater
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button tag={Link} to="/SearchForm">
                Go somewhere
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      ;
    </>
  );
};

export default HOME;
