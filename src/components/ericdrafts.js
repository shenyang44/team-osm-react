import React from "react";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  CardTitle,
  CardText
} from "reactstrap";

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
            Do not consume any products that contains caffeine before donating.
            Caffein can act as diuretics, causing body to get rid of water
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Individuals under 17 or weigh less than 110 pounds should not donate
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler2" style={{ marginBottom: "1rem" }}>
        Common Misconceptions
      </Button>
      <UncontrolledCollapse toggler="#toggler2">
        <Card>
          <CardBody>Might get a disease from donating blood</CardBody>
        </Card>
        <Card>
          <CardBody>
            The equipment provided at the venue are brand new, state-of-the-art,
            disposable and used only once. The only thing you could get is the
            feeling knowing you've helped others
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Can't donate blood because of diabetes or a heart condition
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            For diabetes donors just ensure that your diabetes is under control
            and in a stable condition. For heart condition donors, as long as
            you're not having heart medication, you're good to go
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Can't donate because you're vegetarian or don't have enough iron
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            There is no reason why you shoudn't be able to donate, even if you
            follow a vegan diet. If you included plant-based sources of iron,
            your iron levels will be replenished soon after the donation
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Only have a limited amount of blood and taking blood away from the
            body is bad
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            You body keeps on producing blood and will replenish quickly after
            you've donated.The body contains enough blood to enable you to
            donate without any dire consequences
          </CardBody>
        </Card>
        <Card>
          <CardBody>Have high/low blood pressure</CardBody>
        </Card>
        <Card>
          <CardBody>
            If you have low blood pressure, it is fine to donate blood as long
            as your blood pressure is at least 100/60 (systolic/diastolic).You
            could also donate if you have high blood pressure as long as you
            aren't above 180/100.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler3" style={{ marginBottom: "1rem" }}>
        Blood Donation Types
      </Button>
      <UncontrolledCollapse toggler="#toggler3">
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Whole Blood Donation
          </CardTitle>
          <CardText>
            Whole blood is the most flexible type of donation. It can be
            transfused in its original form, or used to help multiple people
            when separated into its specific components of red cells, plasma and
            platelets.
            <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations.html">
              Learn more about in here.
            </a>
            <br />
            <br />
            Who it helps: Whole blood is frequently given to trauma patients and
            people undergoing surgery.
            <br />
            <br />
            Duration: Approximately 1 hour
            <br />
            <br />
            Ideal Blood Types: All blood types
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Power Red Donation
          </CardTitle>
          <CardText>
            During a Power Red donation, you give a concentrated dose of red
            cells, the part of your blood used every day for those needing
            transfusions as part of their care. This type of donation uses an
            automated process that separates your red blood cells from the other
            blood components, and then safely and comfortably returns your
            plasma and platelets to you. With just a little extra time at your
            appointment, you can donate more red cells and increase your impact
            on patients in need.
            <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/power-red-donation.html">
              Learn more about in here.
            </a>
            <br />
            <br />
            Who it helps: Red cells from a Power Red donation are typically
            given to trauma patients, newborns and emergency transfusions during
            birth, people with sickle cell anemia, and anyone suffering blood
            loss.
            <br />
            <br />
            Duration: Approximately 1.5 hours
            <br />
            <br />
            Ideal blood types: O positive, O negative, A negative, and B
            negative
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Platelet Donation
          </CardTitle>
          <CardText>
            Platelets are tiny cells in your blood that form clots and stop
            bleeding. Platelets are most often used by cancer patients and
            others facing life-threatening illnesses and injuries. In a platelet
            donation, an apheresis machine collects your platelets along with
            some plasma, returning your red cells and most of the plasma back to
            you. A single donation of platelets can yield several transfusable
            units, whereas it takes about five whole blood donations to make up
            a single transfusable unit of platelets. Platelets are collected at
            Red Cross donation centers only, and are not collected at blood
            drives.
            <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/platelet-donation.html">
              Learn more about it here.
            </a>
            <br />
            <br />
            Who it helps: Platelets are a vital element of cancer treatments and
            organ transplant procedures, as well as other surgical procedures.
            <br />
            <br />
            Duration: Approximately 2.5-3 hours
            <br />
            <br />
            Ideal blood types: A positive, A negative, B positive, O positive,
            AB positive and AB negative
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Plasma Donation
          </CardTitle>
          <CardText>
            During an AB Elite donation, you give plasma, a part of your blood
            used to treat patients in emergency situations. AB plasma can be
            given to anyone regardless of their blood type. Plasma is collected
            through an automated process that separates plasma from other blood
            components, then safely and comfortably returns your red blood cells
            and platelets to you. AB Elite maximizes your donation and takes
            just a few minutes longer than donating blood.
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
          </CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler4" style={{ marginBottom: "1rem" }}>
        Blood Components
      </Button>
      <UncontrolledCollapse toggler="#toggler4">
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Whole Blood
          </CardTitle>
          <CardText>
            Whole blood contains red cells, white cells, and platelets (~45% of
            volume) suspended in blood plasma (~55% of volume).
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
            whole blood can be refrigerated for up to 35 days, depending on the
            type of anticoagulant used.
            <br />
            <br />
            Whole blood is used to treat patients who need all the components of
            blood, such as those who have sustained significant blood loss due
            to trauma or surgery.
            <br />
            <br />
            Whole blood can be donated at any Red Cross blood drive or blood
            center.
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Red Cells
          </CardTitle>
          <CardText>
            Red blood cells (RBCs), or erythrocytes, give blood its distinctive
            color. Produced in our bone marrow, they carry oxygen from our lungs
            to the rest of our bodies and take carbon dioxide back to our lungs
            to be exhaled. There are about one billion red blood cells in two to
            three drops of blood.
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
            Key Uses: Trauma, Surgery, Anemia, Any blood loss, Blood disorders,
            such as sickle cell
            <br />
            <br />
            Red blood cells are prepared from whole blood by removing the plasma
            (the liquid portion of the blood). They have a shelf life of up to
            42 days, depending on the type of anticoagulant used. They can also
            be treated and frozen for 10 years or more.
            <br />
            <br />
            RBCs are used to treat anemia without substantially increasing the
            patient’s blood volume. Patients who benefit most from transfusion
            of red blood cells include those with chronic anemia resulting from
            kidney failure or gastrointestinal bleeding, and those with acute
            blood loss resulting from trauma. They can also be used to treat
            blood disorders such as sickle cell disease.
            <br />
          </CardText>{" "}
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Prestorage Leukocyte-Reduced Red Blood Cells
          </CardTitle>
          <CardText>
            Leukocyte-reduced RBCs are prepared by removing leukocytes (white
            blood cells) by filtration shortly after donation. This is done
            before the RBCs are stored because over time the leukocytes can
            fragment, deteriorate, and release cytokines, which can trigger
            negative reactions in the patient who receives them. These reactions
            can occur during the initial transfusion or during any future
            transfusions.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Donating Red Blood Cells
          </CardTitle>
          <CardText>
            The Red Cross calls RBC donations “Power Red.” By donating Power
            Red, you double your impact by contributing two units of red cells
            in just one donation.
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Platelets
          </CardTitle>
          <CardText>
            Platelets, or thrombocytes, are small, colorless cell fragments in
            our blood whose main function is to stick to the lining of blood
            vessels and help stop or prevent bleeding. Platelets are made in our
            bone marrow.
            <br />
            <br />
            Color: Colorless
            <br />
            <br />
            Shelf Life: 5 days
            <br />
            <br />
            Storage Conditions: Room temperature with constant agitation to
            prevent clumping
            <br />
            <br />
            Key Uses: Cancer treatments, Organ transplants, Surgery
            <br />
            <br />
            Platelets can be prepared by using a centrifuge to separate the
            platelet-rich plasma from donated whole blood. Platelets from
            several different donors are then combined to make one tranfusable
            unit. Alternately, platelets can be obtained using an apheresis
            machine which draws blood from the donor’s arm, separates the blood
            into its components, retains some of the platelets, and returns the
            remainder of the blood to the donor. Using this process, one donor
            can contribute about four to six times as many platelets as a unit
            of platelets obtained from a whole blood donation.
            <br />
            <br />
            Platelets are stored at room temperature for up to 5 days. They must
            receive constant gentle agitation to prevent them from clumping.
            <br />
            <br />
            Platelets are most often used during cancer treatment as well as
            surgical procedures such as organ transplant, in order to treat a
            condition called thrombocytopenia, in which there is a shortage of
            platelets. They are also used to treat platelet function
            abnormalities.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Donating Platelets
          </CardTitle>
          <CardText>
            Since platelets must be used within 5 days of donation, there is a
            constant need for platelet donors.
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Plasma
          </CardTitle>
          <CardText>
            Plasma is the liquid portion of blood; our red and white blood cells
            and platelets are suspended in plasma as they move throughout our
            bodies.
            <br />
            <br />
            Color: Yellowish
            <br />
            <br />
            Shelf Life: 1 year
            <br />
            <br />
            Storage Conditions: Frozen
            <br />
            <br />
            Key Uses: Burn patients, Shock, Bleeding disorders
            <br />
            <br />
            Blood plasma serves several important functions in our bodies,
            despite being about 92% water. (Plasma also contains 7% vital
            proteins such as albumin, gamma globulin and anti-hemophilic factor,
            and 1% mineral salts, sugars, fats, hormones and vitamins.) It helps
            us maintain a satisfactory blood pressure and volume, and supplies
            critical proteins for blood clotting and immunity. It also carries
            electrolytes such as sodium and potassium to our muscles and helps
            to maintain a proper pH (acid-base) balance in the body, which is
            critical to cell function.
            <br />
            <br />
            Plasma is obtained by separating the liquid portion of blood from
            the cells. Plasma is frozen within 24 hours of being donated in
            order to preserve the valuable clotting factors. It is then stored
            for up to one year, and thawed when needed.
            <br />
            <br />
            Plasma is commonly transfused to trauma, burn and shock patients, as
            well as people with severe liver disease or multiple clotting factor
            deficiencies.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Plasma Derivaties
          </CardTitle>
          <CardText>
            In some cases, patients need plasma derivatives instead. These are
            concentrates of specific plasma proteins obtained through a process
            known as fractionation. The derivatives are treated with heat and/or
            solvent detergent to kill certain viruses like those that cause HIV,
            hepatitis B, and hepatitis C.
            <br />
            <br />
            Plasma derivatives include:
            <br />
            <br />
            Factor VIII Concentrate
            <br />
            <br />
            Factor IX Concentrate
            <br />
            <br />
            Anti-Inhibitor Coagulation Complex (AICC)
            <br />
            <br />
            Albumin
            <br />
            <br />
            Immune Globulins, including Rh Immune Globulin
            <br />
            <br />
            Anti-Thrombin III Concentrate
            <br />
            <br />
            Alpha 1-Proteinase Inhibitor Concentrate
            <br />
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Donating AB Plasma
          </CardTitle>
          <CardText>
            When collecting specifically plasma, the Red Cross is seeking
            AB-type donors. AB plasma is collected at select Red Cross Donation
            Centers only.
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            Cryo
          </CardTitle>
          <CardText>
            Cryoprecipitated Antihemophilic Factor (Cryo) is a portion of plasma
            rich in clotting factors, including Factor VIII and fibrinogen.
            These clotting factors reduce blood loss by helping to slow or stop
            bleeding due to illness or injury.
            <br />
            <br />
            Color: White
            <br />
            <br />
            Shelf Life: 1 year
            <br />
            <br />
            Storage Conditions: Frozen
            <br />
            <br />
            Key Uses: Hemophilia, Von Willebrand disease (most common hereditary
            coagulation abnormality), Rich source of Fibrinogen
            <br />
            <br />
            Cryo is prepared by freezing and then slowly thawing frozen plasma.
            The precipitate is collected and then pooled with contributions from
            other donors to reach a sufficient volume for transfusion. It can be
            stored, frozen, for up to a year.
            <br />
            <br />
            Cryo is used to prevent or control bleeding in people whose own
            blood does not clot properly. This includes patients with hereditary
            conditions such as hemophilia and von Willebrands disease. Cryo is
            also a source of fibrinogen for patients who cannot produce the
            necessary amount of this important clotting protein on their own.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Donating Cryoprecipitated AHF
          </CardTitle>
          <CardText>Cryo is prepared from donated plasma.</CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            White Cells & Granulocytes
          </CardTitle>
          <CardText>
            White blood cells, or leukocytes, are one of the body’s defenses
            against disease: some destroy bacteria and others create antibodies
            against bacteria and viruses or fight malignant disease. But while
            our own white cells help us stay healthy, they can be dangerous to
            someone who receives donated blood. That’s because leukocytes may
            carry viruses that cause immune suppression and release toxic
            substances in the recipient. To avoid these negative reactions,
            leukocytes are often removed from transfusable blood components, a
            process called leuko-reduction.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Granulocytes
          </CardTitle>
          <CardText>
            That doesn’t necessarily mean your white cells can’t be used to help
            patients in need! Granulocytes are a type of white cell that
            protects against infection by surrounding and destroying invading
            bacteria and viruses. They can be used to treat infections that
            don’t respond to antibiotics. Granulocytes are collected by an
            automated process called apheresis and must be transfused into the
            patient within 24 hours of being donated.
          </CardText>
          <CardTitle
            style={{ color: "black", fontSize: "Medium", fontWeight: "bold" }}
          >
            Donating Granulocytes
          </CardTitle>
          <CardText>
            Since granulocyte must be used within 24 hours, donations are taken
            on an as-needed basis. To be eligible to donate granulocytes, you
            must have donated platelets through the Red Cross within 30 days.
          </CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler5" style={{ marginBottom: "1rem" }}>
        How does the blood donation process take place?
      </Button>
      <UncontrolledCollapse toggler="#toggler5">
        <Card>
          <CardText>
            1. You will first fill up a blood donation registration form or card
          </CardText>
          <CardText>2. Have your body weight weighed and recorded</CardText>
          <CardText>
            3. Have a blood test to identify your blood group and haemoglobin
            level
          </CardText>
          <CardText>
            4. A short Q&A with Medical Officer/nurse to review blood donation
            criteria
          </CardText>
          <CardText>
            5. Blood donation process begins and lasts for about 10 to 15
            minutes
          </CardText>
          <CardText>
            6. After completing the donation, you can take a rest on the bed for
            about 10 minutes
          </CardText>
          <CardText>
            7. Sometimes, you’re also given a light refreshment!
          </CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler6" style={{ marginBottom: "1rem" }}>
        Whom can I help with my blood donation?
      </Button>
      <UncontrolledCollapse toggler="#toggler6">
        <Card>
          <CardText>Your blood can help make a difference for others.</CardText>
          <CardText>-Fire victims</CardText>
          <CardText>-Thalassaemia patients</CardText>
          <CardText>-Dengue patients</CardText>
          <CardText>
            -People who need to undergo surgeries or organ transplant procedures
          </CardText>
          <CardText>-Accident victims</CardText>
          <CardText>-Mothers who have premature childbirth</CardText>
          <CardText>-Cancer patients</CardText>
          <CardText>-Leukemia patients</CardText>
          <CardText>-Heart attack patients</CardText>
          <CardText>-Haemophilia patients</CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler7" style={{ marginBottom: "1rem" }}>
        What do I need to bring for a blood donation event?
      </Button>
      <UncontrolledCollapse toggler="#toggler7">
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            For Malaysian Citizens
          </CardTitle>
          <CardText>-MyKad/Armforce Number/Police Number</CardText>
          <CardText>-Driving license</CardText>
          <CardText>
            -Working pass with Identity card number and photograph
          </CardText>
          <CardText>-Student pass with IC number and photograph</CardText>
          <CardText>-Blood donors book (only for repeating donors)</CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            For Non-Malaysian Citizens
          </CardTitle>
          <CardText>-Passport</CardText>
          <CardText>-Work permit with passport number and photograph</CardText>
          <CardText>-Student pass with passport number and photograph</CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
    <div>
      <Button color="primary" id="toggler8" style={{ marginBottom: "1rem" }}>
        Blood Donation Fufilments
      </Button>
      <UncontrolledCollapse toggler="#toggler8">
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            To participate in the blood donation, there are a few criterias that
            you will have to fufill:
          </CardTitle>
          <CardText>
            -Aged 18 - 60 years old (written permission from parents is required
            for donors aged 17 and below)
          </CardText>
          <CardText>-Body weight at least 45 kg</CardText>
          <CardText>-Haemoglobin level at least 12.5g/dl</CardText>
          <CardText>
            -Good physical and mental health with no serious or chronic medical
            illness
          </CardText>
          <CardText>-Not on long term medications</CardText>
          <CardText>
            -No alcohol intake within the last 24 hours of donation
          </CardText>
          <CardText>-Have taken a proper meal prior to donation</CardText>
          <CardText>
            -Have had more than 5 hours of sleep during the night before
            donation
          </CardText>
          <CardText>
            -Have been staying in malaysia for at least 1 year (for non-citizens
            of Malaysia)
          </CardText>
        </Card>
        <Card>
          <CardTitle
            style={{ color: "black", fontSize: "Large", fontWeight: "bold" }}
          >
            You CANNOT participate in blood donation if you have:
          </CardTitle>
          <CardText>-A professional sex-related job</CardText>
          <CardText>-Drug abuse history</CardText>
          <CardText>-Multiple sexual partners</CardText>
          <CardText>-Same gender sexual activity</CardText>
          <CardText>-Diabetes or insulin treatments</CardText>
          <CardText>-Hepatitis B history</CardText>
          <CardText>-Hepatitis C history</CardText>
          <CardText>-HIV/AIDS diagnosis</CardText>
          <CardText>-Pregnancy or menstruating</CardText>
          <CardText>
            -Less than 1 year since last childbirth/breastfeeding
          </CardText>
          <CardText>-Less than 6 months since last tattoo/piercing</CardText>
          <CardText>
            -Less than 7 days since last intake of antibiotics or vaccination
          </CardText>
          <CardText>
            -Less than 1 week since last illness (like fever or cold)
          </CardText>
        </Card>
      </UncontrolledCollapse>
    </div>
  </>
);

export default Ericdraft;
