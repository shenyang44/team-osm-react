import React from "react";
import { Table, Button } from "reactstrap";

const ProfTable = props => {
  return (
    <div className="tbcontainer">
      <Table bordered id="Table" className="w-50">
        <tbody>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Name</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              logic for logged in user
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Email</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              logic for logged in email
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Address</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              logic for logged in address
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>
              Blood Group
            </td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              reflect input here
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProfTable;
