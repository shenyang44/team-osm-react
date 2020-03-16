import React from "react";
import { Table } from "reactstrap";

const TABLE = props => {
  return (
    <Table bordered id="Table" className="w-50">
      <tbody>
        <tr>
          <td style={{ width: "20%", border: "1px solid black" }}>Name</td>
          <td style={{ width: "20%", border: "1px solid black" }}></td>
        </tr>
        <tr>
          <td style={{ width: "20%", border: "1px solid black" }}>Password</td>
          <td style={{ width: "20%", border: "1px solid black" }}></td>
        </tr>
        <tr>
          <td style={{ width: "20%", border: "1px solid black" }}>Email</td>
          <td style={{ width: "20%", border: "1px solid black" }}></td>
        </tr>
        <tr>
          <td style={{ width: "20%", border: "1px solid black" }}>Address</td>
          <td style={{ width: "20%", border: "1px solid black" }}></td>
        </tr>
        <tr>
          <td style={{ width: "20%", border: "1px solid black" }}>
            Blood Group
          </td>
          <td style={{ width: "20%", border: "1px solid black" }}></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TABLE;
