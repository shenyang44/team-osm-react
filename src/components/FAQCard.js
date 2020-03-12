import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const FAQCard = () => {
  return (
    <>
      <center>
        <h1>FAQ</h1>
      </center>
      <div style={{ width: "40%" }}>
        <Card>
          <Card.Header>
            <h5 style={{ color: "black" }}>
              Do's and Dont's before taking a blood test
            </h5>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -Consume iron-rich foods starting a week or two before you donate
            </Card.Text>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -Take plenty of fluids on and after the day of the donation
            </Card.Text>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -Ensure that you are not ill on the day of the donation, if so
              reschedule.
            </Card.Text>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -After the donation, have a snack and rest.Snacks are usually
              provided at the venue as it helps ensures that you won't get
              lightheaded
            </Card.Text>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -Do not consume any products that contains caffeine before
              donating. Caffein can act as diuretics, causing body to get rid of
              water.
            </Card.Text>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              -Individuals under 17 or weigh less than 110 pounds should not
              donate
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>
            <h5 style={{ color: "black" }}>Common Misconceptions</h5>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Might get a disease from donating blood
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              The equipment provided at the venue are brand new,
              state-of-the-art, disposable and used only once. The only thing
              you could get is the feeling knowing you've helped others.
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Can't donate blood because of diabetes or a heart condition
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              For diabetes donors just ensure that your diabetes is under
              control and in a stable condition. For heart condition donors, as
              long as you're not having heart medication, you're good to go.
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Can't donate because you're vegetarian or don't have enough iron
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              There is no reason why you shoudn't be able to donate, even if you
              follow a vegan diet. If you included plant-based sources of iron,
              your iron levels will be replenished soon after the donation.
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Only have a limited amount of blood and taking blood away from the
              body is bad
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              You body keeps on producing blood and will replenish quickly after
              you've donated.The body contains enough blood to enable you to
              donate without any dire consequences.
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Have high/low blood pressure
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              If you have low blood pressure, it is fine to donate blood as long
              as your blood pressure is at least 100/60 (systolic/diastolic).You
              could also donate if you have high blood pressure as long as you
              aren't above 180/100.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FAQCard;
