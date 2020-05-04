import React from "react";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  CardText,
} from "reactstrap";
import "../components/blood.css";

const Blood = () => {
  return (
    <>
      <div className="faqcontainer">
        <div>
          <Button color="danger" id="toggler" style={{ marginBottom: "1rem" }}>
            Blood Components
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                Whole Blood
              </CardBody>
              <CardBody>
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
                original form, or used to help multiple people when separated
                into its specific components of red cells, plasma and platelets.
                <br />
                <br />
                A whole blood donation requires minimal processing before it is
                ready to be transfused into a patient. If not needed right away,
                whole blood can be refrigerated for up to 35 days, depending on
                the type of anticoagulant used.
                <br />
                <br />
                Whole blood is used to treat patients who need all the
                components of blood, such as those who have sustained
                significant blood loss due to trauma or surgery.
                <br />
                <br />
                Whole blood can be donated at any Red Cross blood drive or blood
                center.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                Red Cells
              </CardBody>
              <CardBody>
                Red blood cells (RBCs), or erythrocytes, give blood its
                distinctive color. Produced in our bone marrow, they carry
                oxygen from our lungs to the rest of our bodies and take carbon
                dioxide back to our lungs to be exhaled. There are about one
                billion red blood cells in two to three drops of blood.
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
                RBCs are used to treat anemia without substantially increasing
                the patient’s blood volume. Patients who benefit most from
                transfusion of red blood cells include those with chronic anemia
                resulting from kidney failure or gastrointestinal bleeding, and
                those with acute blood loss resulting from trauma. They can also
                be used to treat blood disorders such as sickle cell disease.
                <br />
              </CardBody>{" "}
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Prestorage Leukocyte-Reduced Red Blood Cells
              </CardBody>
              <CardBody>
                Leukocyte-reduced RBCs are prepared by removing leukocytes
                (white blood cells) by filtration shortly after donation. This
                is done before the RBCs are stored because over time the
                leukocytes can fragment, deteriorate, and release cytokines,
                which can trigger negative reactions in the patient who receives
                them. These reactions can occur during the initial transfusion
                or during any future transfusions.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Donating Red Blood Cells
              </CardBody>
              <CardBody>
                The Red Cross calls RBC donations “Power Red.” By donating Power
                Red, you double your impact by contributing two units of red
                cells in just one donation.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                Platelets
              </CardBody>
              <CardBody>
                Platelets, or thrombocytes, are small, colorless cell fragments
                in our blood whose main function is to stick to the lining of
                blood vessels and help stop or prevent bleeding. Platelets are
                made in our bone marrow.
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
                several different donors are then combined to make one
                tranfusable unit. Alternately, platelets can be obtained using
                an apheresis machine which draws blood from the donor’s arm,
                separates the blood into its components, retains some of the
                platelets, and returns the remainder of the blood to the donor.
                Using this process, one donor can contribute about four to six
                times as many platelets as a unit of platelets obtained from a
                whole blood donation.
                <br />
                <br />
                Platelets are stored at room temperature for up to 5 days. They
                must receive constant gentle agitation to prevent them from
                clumping.
                <br />
                <br />
                Platelets are most often used during cancer treatment as well as
                surgical procedures such as organ transplant, in order to treat
                a condition called thrombocytopenia, in which there is a
                shortage of platelets. They are also used to treat platelet
                function abnormalities.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Donating Platelets
              </CardBody>
              <CardBody>
                Since platelets must be used within 5 days of donation, there is
                a constant need for platelet donors.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                Plasma
              </CardBody>
              <CardBody>
                Plasma is the liquid portion of blood; our red and white blood
                cells and platelets are suspended in plasma as they move
                throughout our bodies.
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
                proteins such as albumin, gamma globulin and anti-hemophilic
                factor, and 1% mineral salts, sugars, fats, hormones and
                vitamins.) It helps us maintain a satisfactory blood pressure
                and volume, and supplies critical proteins for blood clotting
                and immunity. It also carries electrolytes such as sodium and
                potassium to our muscles and helps to maintain a proper pH
                (acid-base) balance in the body, which is critical to cell
                function.
                <br />
                <br />
                Plasma is obtained by separating the liquid portion of blood
                from the cells. Plasma is frozen within 24 hours of being
                donated in order to preserve the valuable clotting factors. It
                is then stored for up to one year, and thawed when needed.
                <br />
                <br />
                Plasma is commonly transfused to trauma, burn and shock
                patients, as well as people with severe liver disease or
                multiple clotting factor deficiencies.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Plasma Derivaties
              </CardBody>
              <CardBody>
                In some cases, patients need plasma derivatives instead. These
                are concentrates of specific plasma proteins obtained through a
                process known as fractionation. The derivatives are treated with
                heat and/or solvent detergent to kill certain viruses like those
                that cause HIV, hepatitis B, and hepatitis C.
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
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Donating AB Plasma
              </CardBody>
              <CardBody>
                When collecting specifically plasma, the Red Cross is seeking
                AB-type donors. AB plasma is collected at select Red Cross
                Donation Centers only.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                Cryo
              </CardBody>
              <CardBody>
                Cryoprecipitated Antihemophilic Factor (Cryo) is a portion of
                plasma rich in clotting factors, including Factor VIII and
                fibrinogen. These clotting factors reduce blood loss by helping
                to slow or stop bleeding due to illness or injury.
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
                Key Uses: Hemophilia, Von Willebrand disease (most common
                hereditary coagulation abnormality), Rich source of Fibrinogen
                <br />
                <br />
                Cryo is prepared by freezing and then slowly thawing frozen
                plasma. The precipitate is collected and then pooled with
                contributions from other donors to reach a sufficient volume for
                transfusion. It can be stored, frozen, for up to a year.
                <br />
                <br />
                Cryo is used to prevent or control bleeding in people whose own
                blood does not clot properly. This includes patients with
                hereditary conditions such as hemophilia and von Willebrands
                disease. Cryo is also a source of fibrinogen for patients who
                cannot produce the necessary amount of this important clotting
                protein on their own.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Donating Cryoprecipitated AHF
              </CardBody>
              <CardText>Cryo is prepared from donated plasma.</CardText>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                White Cells & Granulocytes
              </CardBody>
              <CardBody>
                White blood cells, or leukocytes, are one of the body’s defenses
                against disease: some destroy bacteria and others create
                antibodies against bacteria and viruses or fight malignant
                disease. But while our own white cells help us stay healthy,
                they can be dangerous to someone who receives donated blood.
                That’s because leukocytes may carry viruses that cause immune
                suppression and release toxic substances in the recipient. To
                avoid these negative reactions, leukocytes are often removed
                from transfusable blood components, a process called
                leuko-reduction.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Granulocytes
              </CardBody>
              <CardBody>
                That doesn’t necessarily mean your white cells can’t be used to
                help patients in need! Granulocytes are a type of white cell
                that protects against infection by surrounding and destroying
                invading bacteria and viruses. They can be used to treat
                infections that don’t respond to antibiotics. Granulocytes are
                collected by an automated process called apheresis and must be
                transfused into the patient within 24 hours of being donated.
              </CardBody>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Medium",
                  fontWeight: "bold",
                }}
              >
                Donating Granulocytes
              </CardBody>
              <CardBody>
                Since granulocyte must be used within 24 hours, donations are
                taken on an as-needed basis. To be eligible to donate
                granulocytes, you must have donated platelets through the Red
                Cross within 30 days.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
        <br />
        <div>
          <Button color="danger" id="toggler2" style={{ marginBottom: "1rem" }}>
            Blood Types explained
          </Button>
          <UncontrolledCollapse toggler="#toggler2">
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                The ABO system
              </CardBody>
              <CardBody>
                The most important blood group system is ABO, in which your
                blood is classified as A, B, O or AB. This is determined by two
                antigens on the red blood cells:
                <br />
                <br />
                A — red blood cells have only the A antigen
                <br />
                <br />
                B — red blood cells have only the B antigen
                <br />
                <br />
                AB — red blood cells have the A and B antigens
                <br />
                <br />
                O — neither A nor B antigen
                <br />
                <br />
                If a person has A, B or O blood type, their plasma contains
                antibodies that destroy the antigens that the person doesn’t
                have. For example: If you have blood type A, it’s imperative
                that you don’t receive a B type transfusion, as you have
                antibodies that will destroy B antigens. If you have blood type
                O, you have antibodies that will fight the A and B antigens.
                <br />
                <br />
                If a person has blood type AB, they don’t have such antibodies,
                and they can accept transfusions from all other blood types.
                Thus AB blood type people can be termed universal patients.
                <br />
                <br />
                But O Rh negative donors can be called universal donors, as red
                blood cells from such donors can be used for transfusions for
                all patients.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                The Rh system
              </CardBody>
              <CardBody>
                A person’s Rh group can be positive (+) or negative (-).This
                depends on the existence of antigen RhD on the red blood cells.
                If the RhD antigen is present, a person is Rh positive and if
                RhD is not present, the person is Rh negative.
                <br />
                <br />
                If a person is Rh negative, they may develop antibodies on
                exposure to Rh positive blood (such as during transfusions or
                pregnancy). These antibodies may cause pregnancy complications
                for Rh negative women giving birth to an Rh positive child.
                <br />
                <br />
                In addition, about 30 other blood group systems have been
                identified besides the ABO and Rh blood group systems. Of these,
                the clinically most significant are Kell, Kidd and Duffy
                systems. Donors are also tested for Kell blood group.
              </CardBody>
            </Card>
            <Card>
              <CardBody
                style={{
                  color: "black",
                  fontSize: "Large",
                  fontWeight: "bold",
                }}
              >
                How is the blood type identified?
              </CardBody>
              <CardBody>
                The person’s blood is combined with a reagent with antibodies.
                <br />
                <br />
                For instance, three drops of a donor’s blood are placed on a
                slide or dish. Anti-A reagent is added to the first drop, anti-B
                reagent to the second one and anti-D – RhD reagent – to the
                third one. If agglutination is noted in the first drop, that
                shows that the person has A antigen. If the same thing doesn’t
                happen in the second drop, the person has no B antigen; and if
                agglutination is seen in the third drop, the person is Rh
                positive. We can say based on that example that the donor is A
                positive.
                <br />
                <br />
                Ensuring a match between donor and patient is extremely
                important; otherwise a patient may have a dangerous reaction to
                the transfusion.
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    </>
  );
};
export default Blood;
