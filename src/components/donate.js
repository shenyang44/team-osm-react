import React from "react";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  CardText,
  CardTitle
} from "reactstrap";
import "../components/donate.css";

const Donate = () => {
  return (
    <>
      <div className="faqcontainer">
        <div>
          <Button color="danger" id="toggler" style={{ marginBottom: "1rem" }}>
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
            <Card>
              <CardBody>
                Ensure that you are not ill on the day of the donation, if so
                reschedule
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                After the donation, have a snack and rest.Snacks are usually
                provided at the venue as it helps ensures that you won't get
                lightheaded
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Do not consume any products that contains caffeine before
                donating. Caffein can act as diuretics, causing body to get rid
                of water
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Individuals under 17 or weigh less than 110 pounds should not
                donate
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler2" style={{ marginBottom: "1rem" }}>
            Common Misconceptions
          </Button>
          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody>Might get a disease from donating blood</CardBody>
            </Card>
            <Card>
              <CardBody>
                The equipment provided at the venue are brand new,
                state-of-the-art, disposable and used only once. The only thing
                you could get is the feeling knowing you've helped others
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Can't donate blood because of diabetes or a heart condition
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                For diabetes donors just ensure that your diabetes is under
                control and in a stable condition. For heart condition donors,
                as long as you're not having heart medication, you're good to go
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Can't donate because you're vegetarian or don't have enough iron
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                There is no reason why you shoudn't be able to donate, even if
                you follow a vegan diet. If you included plant-based sources of
                iron, your iron levels will be replenished soon after the
                donation
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Only have a limited amount of blood and taking blood away from
                the body is bad
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                You body keeps on producing blood and will replenish quickly
                after you've donated.The body contains enough blood to enable
                you to donate without any dire consequences
              </CardBody>
            </Card>
            <Card>
              <CardBody>Have high/low blood pressure</CardBody>
            </Card>
            <Card>
              <CardBody>
                If you have low blood pressure, it is fine to donate blood as
                long as your blood pressure is at least 100/60
                (systolic/diastolic).You could also donate if you have high
                blood pressure as long as you aren't above 180/100.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler3" style={{ marginBottom: "1rem" }}>
            Blood Donation Types
          </Button>
          <UncontrolledCollapse toggler="#toggler3">
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                Whole Blood Donation
              </CardBody>
              <CardBody>
                Whole blood is the most flexible type of donation. It can be
                transfused in its original form, or used to help multiple people
                when separated into its specific components of red cells, plasma
                and platelets.
                <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations.html">
                  Learn more about in here.
                </a>
                <br />
                <br />
                Who it helps: Whole blood is frequently given to trauma patients
                and people undergoing surgery.
                <br />
                <br />
                Duration: Approximately 1 hour
                <br />
                <br />
                Ideal Blood Types: All blood types
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                Power Red Donation
              </CardBody>
              <CardBody>
                During a Power Red donation, you give a concentrated dose of red
                cells, the part of your blood used every day for those needing
                transfusions as part of their care. This type of donation uses
                an automated process that separates your red blood cells from
                the other blood components, and then safely and comfortably
                returns your plasma and platelets to you. With just a little
                extra time at your appointment, you can donate more red cells
                and increase your impact on patients in need.
                <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/power-red-donation.html">
                  Learn more about in here.
                </a>
                <br />
                <br />
                Who it helps: Red cells from a Power Red donation are typically
                given to trauma patients, newborns and emergency transfusions
                during birth, people with sickle cell anemia, and anyone
                suffering blood loss.
                <br />
                <br />
                Duration: Approximately 1.5 hours
                <br />
                <br />
                Ideal blood types: O positive, O negative, A negative, and B
                negative
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                Platelet Donation
              </CardBody>
              <CardBody>
                Platelets are tiny cells in your blood that form clots and stop
                bleeding. Platelets are most often used by cancer patients and
                others facing life-threatening illnesses and injuries. In a
                platelet donation, an apheresis machine collects your platelets
                along with some plasma, returning your red cells and most of the
                plasma back to you. A single donation of platelets can yield
                several transfusable units, whereas it takes about five whole
                blood donations to make up a single transfusable unit of
                platelets. Platelets are collected at Red Cross donation centers
                only, and are not collected at blood drives.
                <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/platelet-donation.html">
                  Learn more about it here.
                </a>
                <br />
                <br />
                Who it helps: Platelets are a vital element of cancer treatments
                and organ transplant procedures, as well as other surgical
                procedures.
                <br />
                <br />
                Duration: Approximately 2.5-3 hours
                <br />
                <br />
                Ideal blood types: A positive, A negative, B positive, O
                positive, AB positive and AB negative
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                Plasma Donation
              </CardBody>
              <CardBody>
                During an AB Elite donation, you give plasma, a part of your
                blood used to treat patients in emergency situations. AB plasma
                can be given to anyone regardless of their blood type. Plasma is
                collected through an automated process that separates plasma
                from other blood components, then safely and comfortably returns
                your red blood cells and platelets to you. AB Elite maximizes
                your donation and takes just a few minutes longer than donating
                blood.
                <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/plasma-donation.html">
                  Learn more about it here.
                </a>
                <br />
                <br />
                Who it helps: AB Plasma is used in emergency and trauma
                situations to help stop bleeding.
                <br />
                <br />
                Duration: Approximately 1 hour 15 minutes
                <br />
                <br />
                Ideal blood types: AB positive, AB negative
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler5" style={{ marginBottom: "1rem" }}>
            How does the blood donation process take place?
          </Button>
          <UncontrolledCollapse toggler="#toggler5">
            <Card>
              <CardBody>
                1. You will first fill up a blood donation registration form or
                card
              </CardBody>
              <CardBody>2. Have your body weight weighed and recorded</CardBody>
              <CardBody>
                3. Have a blood test to identify your blood group and
                haemoglobin level
              </CardBody>
              <CardBody>
                4. A short Q&A with Medical Officer/nurse to review blood
                donation criteria
              </CardBody>
              <CardBody>
                5. Blood donation process begins and lasts for about 10 to 15
                minutes
              </CardBody>
              <CardBody>
                6. After completing the donation, you can take a rest on the bed
                for about 10 minutes
              </CardBody>
              <CardBody>
                7. Sometimes, you’re also given a light refreshment!
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler6" style={{ marginBottom: "1rem" }}>
            Whom can I help with my blood donation?
          </Button>
          <UncontrolledCollapse toggler="#toggler6">
            <Card>
              <CardBody>
                Your blood can help make a difference for others.
              </CardBody>
              <CardBody>-Fire victims</CardBody>
              <CardBody>-Thalassaemia patients</CardBody>
              <CardBody>-Dengue patients</CardBody>
              <CardBody>
                -People who need to undergo surgeries or organ transplant
                procedures
              </CardBody>
              <CardBody>-Accident victims</CardBody>
              <CardBody>-Mothers who have premature childbirth</CardBody>
              <CardBody>-Cancer patients</CardBody>
              <CardBody>-Leukemia patients</CardBody>
              <CardBody>-Heart attack patients</CardBody>
              <CardBody>-Haemophilia patients</CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler7" style={{ marginBottom: "1rem" }}>
            What do I need to bring for a blood donation event?
          </Button>
          <UncontrolledCollapse toggler="#toggler7">
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                For Malaysian Citizens
              </CardBody>
              <CardBody>-MyKad/Armforce Number/Police Number</CardBody>
              <CardBody>-Driving license</CardBody>
              <CardBody>
                -Working pass with Identity card number and photograph
              </CardBody>
              <CardBody>-Student pass with IC number and photograph</CardBody>
              <CardBody>
                -Blood donors book (only for repeating donors)
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                For Non-Malaysian Citizens
              </CardBody>
              <CardBody>-Passport</CardBody>
              <CardBody>
                -Work permit with passport number and photograph
              </CardBody>
              <CardBody>
                -Student pass with passport number and photograph
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler8" style={{ marginBottom: "1rem" }}>
            Blood Donation Fufilments
          </Button>
          <UncontrolledCollapse toggler="#toggler8">
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                To participate in the blood donation, there are a few criterias
                that you will have to fufill:
              </CardBody>
              <CardBody>
                -Aged 18 - 60 years old (written permission from parents is
                required for donors aged 17 and below)
              </CardBody>
              <CardBody>-Body weight at least 45 kg</CardBody>
              <CardBody>-Haemoglobin level at least 12.5g/dl</CardBody>
              <CardBody>
                -Good physical and mental health with no serious or chronic
                medical illness
              </CardBody>
              <CardBody>-Not on long term medications</CardBody>
              <CardBody>
                -No alcohol intake within the last 24 hours of donation
              </CardBody>
              <CardBody>-Have taken a proper meal prior to donation</CardBody>
              <CardBody>
                -Have had more than 5 hours of sleep during the night before
                donation
              </CardBody>
              <CardBody>
                -Have been staying in malaysia for at least 1 year (for
                non-citizens of Malaysia)
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold"
                }}
              >
                You CANNOT participate in blood donation if you have:
              </CardBody>
              <CardBody>-A professional sex-related job</CardBody>
              <CardBody>-Drug abuse history</CardBody>
              <CardBody>-Multiple sexual partners</CardBody>
              <CardBody>-Same gender sexual activity</CardBody>
              <CardBody>-Diabetes or insulin treatments</CardBody>
              <CardBody>-Hepatitis B history</CardBody>
              <CardBody>-Hepatitis C history</CardBody>
              <CardBody>-HIV/AIDS diagnosis</CardBody>
              <CardBody>-Pregnancy or menstruating</CardBody>
              <CardBody>
                -Less than 1 year since last childbirth/breastfeeding
              </CardBody>
              <CardBody>
                -Less than 6 months since last tattoo/piercing
              </CardBody>
              <CardBody>
                -Less than 7 days since last intake of antibiotics or
                vaccination
              </CardBody>
              <CardBody>
                -Less than 1 week since last illness (like fever or cold)
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    </>
  );
};
export default Donate;
