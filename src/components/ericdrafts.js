import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const Ericdraft = () => (
  <>
    <div>
      <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
        Do's and Dont's before taking a blood test
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            Consume iron-rich foods starting a week or two before you donate
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Take plenty of fluids on and after the day of the donation
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler2" style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <UncontrolledCollapse toggler="#toggler2">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  </>
);

export default Ericdraft;
