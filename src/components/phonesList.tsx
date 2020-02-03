import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const phones = [
  { phone: "Meizu", model: "Pro 7 Plus" },
  { phone: "LG", model: "Nexus One" }
];

const phonesList = phones.map((value, index) => (
  <Grid container spacing={1}>
    <Grid item xs={5} key={index}>
      <TextField
        id="standard-basic"
        label={value.phone}
        fullWidth={true}
        disabled
      />
    </Grid>
    <Grid item xs={5} key={index}>
      <TextField
        id="standard-basic"
        label={value.model}
        fullWidth={true}
        disabled
      />
    </Grid>
    <Grid item xs={2} key={index}>
      <Button variant="contained" fullWidth={true}>
        Уд.
      </Button>
    </Grid>
  </Grid>
));

class PhonesList extends React.Component {
  render() {
    return <div>{phonesList}</div>;
  }
}

export default PhonesList;
