import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import axios from 'axios';

const ProfTable = props => {
  const [address, setAddress] = useState('unavailable')
  const [name, setName] = useState('unavailable')
  const [number, setNumber] = useState('unavailable')
  const [email, setEmail] = useState('unavailable')
  const [blood, setBlood] = useState('Blood input in form not working')

  function callAx() {
    axios({
      method: "GET",
      url: "https://team-osm.herokuapp.com/api/v1/users/show",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => {
        console.log(response);
        setAddress(response.data.address)
        setNumber(response.data.number)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="tbcontainer">
      <Table bordered id="Table" className="w-50">
        <tbody>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Name</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              {name}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Email</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              {email}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Address</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              {address}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>Phone Number</td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              {number}
            </td>
          </tr>
          <tr>
            <td style={{ width: "20%", border: "1px solid black" }}>
              Blood Group
            </td>
            <td style={{ width: "20%", border: "1px solid black" }}>
              {blood}
            </td>
          </tr>
        </tbody>
      </Table>
      <button onClick={callAx}>
        asicapo
      </button>
    </div>
  );
};

export default ProfTable;
