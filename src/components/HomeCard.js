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
import { NavLink } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import "../pages/Home.css";

const HOME = () => {
  return (
    <>
      <br />
      <div className="cardcontain">
        <Row>
          <Col sm="6">
            <a href="/blood">
              <Card className="ccard" body>
                <CardImg
                  className="ccardd"
                  width="100%"
                  height="100%"
                  src="img/blood-cells.jpg"
                  alt="Card image cap"
                />
                <CardImgOverlay className="coverlay">
                  <div>
                    <CardTitle>
                      <i class="fas fa-vial fa-4x"></i>Blood Info
                    </CardTitle>
                    <CardText>
                      General information on blood & their properties
                    </CardText>
                  </div>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
          <Col sm="6">
            <a href="/donate">
              <Card className="ccard" body>
                <CardImg
                  className="ccardd"
                  width="100%"
                  height="100%"
                  src="img/hero-hand.jpg"
                  alt="Card image cap"
                />
                <CardImgOverlay className="coverlay">
                  <div>
                    <CardTitle>
                      <i class="far fa-calendar-alt fa-4x"></i> Event
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                  </div>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="6">
            <a href="/donate">
              <Card className="ccard" body>
                <CardImg
                  className="ccardd"
                  width="100%"
                  height="100%"
                  src="img/blood-donor.jpg"
                  alt="Card image cap"
                />
                <CardImgOverlay className="coverlay">
                  <div>
                    <CardTitle>
                      <i class="fas fa-info-circle fa-4x"></i> About Donation
                    </CardTitle>
                    <CardText>General information on donating blood.</CardText>
                    <CardText>The criterias, the process, ...</CardText>
                  </div>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
          <Col sm="6">
            <a href="SearchForm">
              <Card className="ccard" body>
                <CardImg
                  className="ccardd"
                  width="100%"
                  height="100%"
                  src="img/blood-donor.jpg"
                  alt="Card image cap"
                />
                <CardImgOverlay className="coverlay">
                  <div>
                    <CardTitle>
                      <i class="fas fa-search-location fa-4x"></i> Locater
                    </CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                  </div>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HOME;
