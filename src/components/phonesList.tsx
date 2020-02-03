import React from "react";
import Grid from "@material-ui/core/Grid";

const phones = [
  { phone: "Meizu", model: "Pro 7 Plus" },
  { phone: "LG", model: "Nexus One" }
];

const phonesList = phones.map((value, index) => (
  <div key={index}>
    <h2>{value.phone}</h2>
    <h2>{value.model}</h2>
  </div>
));

class PhonesList extends React.Component {
  render() {
    return <div>{phonesList}</div>;
  }
}

export default PhonesList;
