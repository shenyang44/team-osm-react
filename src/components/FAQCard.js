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
          <Card.Header>
            <h5 style={{ color: "black" }}>Blood Donation Types</h5>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Whole Blood Donation
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
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
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Power Red Donation
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              During a Power Red donation, you give a concentrated dose of red
              cells, the part of your blood used every day for those needing
              transfusions as part of their care. This type of donation uses an
              automated process that separates your red blood cells from the
              other blood components, and then safely and comfortably returns
              your plasma and platelets to you. With just a little extra time at
              your appointment, you can donate more red cells and increase your
              impact on patients in need.
              <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/power-red-donation.html">
                Learn more about in here.
              </a>
              <br />
              <br />
              Who it helps: Red cells from a Power Red donation are typically
              given to trauma patients, newborns and emergency transfusions
              during birth, people with sickle cell anemia, and anyone suffering
              blood loss.
              <br />
              <br />
              Duration: Approximately 1.5 hours
              <br />
              <br />
              Ideal blood types: O positive, O negative, A negative, and B
              negative
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Platelet Donation
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              Platelets are tiny cells in your blood that form clots and stop
              bleeding. Platelets are most often used by cancer patients and
              others facing life-threatening illnesses and injuries. In a
              platelet donation, an apheresis machine collects your platelets
              along with some plasma, returning your red cells and most of the
              plasma back to you. A single donation of platelets can yield
              several transfusable units, whereas it takes about five whole
              blood donations to make up a single transfusable unit of
              platelets. Platelets are collected at Red Cross donation centers
              only, and are not collected at blood drives.{" "}
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
              Ideal blood types: A positive, A negative, B positive, O positive,
              AB positive and AB negative
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Plasma Donation
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              During an AB Elite donation, you give plasma, a part of your blood
              used to treat patients in emergency situations. AB plasma can be
              given to anyone regardless of their blood type. Plasma is
              collected through an automated process that separates plasma from
              other blood components, then safely and comfortably returns your
              red blood cells and platelets to you. AB Elite maximizes your
              donation and takes just a few minutes longer than donating blood.{" "}
              <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/plasma-donation.html">
                Learn more about it here.
              </a>
              <br />
              <br />
              Who it helps: AB Plasma is used in emergency and trauma situations
              to help stop bleeding.
              <br />
              <br />
              Duration: Approximately 1 hour 15 minutes
              <br />
              <br />
              Ideal blood types: AB positive, AB negative
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>
            <h5 style={{ color: "black" }}>Blood Components</h5>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Whole Blood
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              Whole blood contains red cells, white cells, and platelets (~45%
              of volume) suspended in blood plasma (~55% of volume).
              <br />
              <br />
              Color: Red
              <br />
              <br />
              Shelf Life: 21/35 days*
              <br />
              <br />
              Storage Conditions: Refrigerated
              <br />
              <br />
              Key Uses: Trauma, Surgery
              <br />
              <br />
              Whole Blood is the simplest, most common type of blood donation.
              It’s also the most flexible because it can be transfused in its
              original form, or used to help multiple people when separated into
              its specific components of red cells, plasma and platelets.
              <br />
              <br />
              A whole blood donation requires minimal processing before it is
              ready to be transfused into a patient. If not needed right away,
              whole blood can be refrigerated for up to 35 days, depending on
              the type of anticoagulant used.
              <br />
              <br />
              Whole blood is used to treat patients who need all the components
              of blood, such as those who have sustained significant blood loss
              due to trauma or surgery.
              <br />
              <br />
              Whole blood can be donated at any Red Cross blood drive or blood
              center.
              <br />
              <br />
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Medium" }}>
              Red Cells
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              Red blood cells (RBCs), or erythrocytes, give blood its
              distinctive color. Produced in our bone marrow, they carry oxygen
              from our lungs to the rest of our bodies and take carbon dioxide
              back to our lungs to be exhaled. There are about one billion red
              blood cells in two to three drops of blood.
              <br />
              <br />
              Color: Red
              <br />
              <br />
              Shelf Life: Up to 42 days*
              <br />
              <br />
              Storage Conditions: Refrigerated
              <br />
              <br />
              Key Uses: Trauma, Surgery, Anemia, Any blood loss, Blood
              disorders, such as sickle cell
              <br />
              <br />
              Red blood cells are prepared from whole blood by removing the
              plasma (the liquid portion of the blood). They have a shelf life
              of up to 42 days, depending on the type of anticoagulant used.
              They can also be treated and frozen for 10 years or more.
              <br />
              <br />
              RBCs are used to treat anemia without substantially increasing the
              patient’s blood volume. Patients who benefit most from transfusion
              of red blood cells include those with chronic anemia resulting
              from kidney failure or gastrointestinal bleeding, and those with
              acute blood loss resulting from trauma. They can also be used to
              treat blood disorders such as sickle cell disease.
              <br />
              <br />
            </Card.Text>
            <Card.Title style={{ color: "black", fontSize: "Small" }}>
              Prestorage Leukocyte-Reduced Red Blood Cells
            </Card.Title>
            <br />
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              Leukocyte-reduced RBCs are prepared by removing leukocytes (white
              blood cells) by filtration shortly after donation. This is done
              before the RBCs are stored because over time the leukocytes can
              fragment, deteriorate, and release cytokines, which can trigger
              negative reactions in the patient who receives them. These
              reactions can occur during the initial transfusion or during any
              future transfusions.
            </Card.Text>
            <br />
            <Card.Title style={{ color: "black", fontSize: "Small" }}>
              Donating Red Blood Cells
            </Card.Title>
            <br />
            <Card.Text style={{ color: "black", fontSize: "small" }}>
              The Red Cross calls RBC donations “Power Red.” By donating Power
              Red, you double your impact by contributing two units of red cells
              in just one donation.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FAQCard;
