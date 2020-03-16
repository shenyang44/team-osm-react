import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

const pageTransit = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

// const pageTransition = {
//   transition: "linear"
// };

const Home = () => {
  return (
    <div className="menu">
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransit}
        // transition={pageTransition}
        className="iconss"
      >
        <Card className="col-md-4 col-md-push-4 col-sm-4" inverse>
          <CardImg
            width="100%"
            src="/assets/318x270.svg"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
        <Card className="col-md-4 col-md-push-4 col-sm-4" inverse>
          <CardImg
            width="100%"
            src="/assets/318x270.svg"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
        <Card className="col-md-4 col-md-push-4 col-sm-4" inverse>
          <CardImg
            width="100%"
            src="/assets/318x270.svg"
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
        </Card>
        {/* <div>
          <Link className="iconn" tag={Link} to="/blood">
            <i class="fas fa-vial fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/event">
            <i class="far fa-calendar-alt fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/faq">
            <i class="fas fa-info-circle fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/SearchForm">
            <i class="fas fa-search-location fa-4x"></i>
          </Link>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Home;
