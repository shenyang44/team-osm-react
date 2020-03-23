import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
  CardImgOverlay
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import "../pages/Home.css";

const HOME = () => {
  return (
    <>
      <br />
      <div className="cardcontain">
        <Row>
          <Col sm="6">
            <Card className="ccard" body>
              <CardImg
                className="ccardd"
                width="100%"
                src="img/blood-donation.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>
                  <i class="fas fa-vial fa-4x"></i> Blood
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <Button tag={Link} to="/blood">
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="ccard" body>
              <CardImg
                className="ccardd"
                width="100%"
                src="img/hero-hand.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>
                  <i class="far fa-calendar-alt fa-4x"></i> Event
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <Button tag={Link} to="/event">
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6">
            <Card className="ccard" body>
              <CardImg
                className="ccardd"
                width="100%"
                src="img/blood-donor.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>
                  <i class="fas fa-info-circle fa-4x"></i> FAQ
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <Button tag={Link} to="/faq">
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="ccard" body>
              <CardImg
                className="ccardd"
                width="100%"
                src="img/blood-donor.jpg"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>
                  <i class="fas fa-search-location fa-4x"></i> Locater
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br /> */}
                <Button tag={Link} to="/SearchForm">
                  Go somewhere
                </Button>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HOME;
