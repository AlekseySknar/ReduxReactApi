import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function phonesList(phones = [], props) {
  return phones.map((value, index) => (
    <div key={index}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <TextField label={value.phone} fullWidth={true} disabled />
        </Grid>
        <Grid item xs={5}>
          <TextField label={value.model} fullWidth={true} disabled />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            fullWidth={true}
            onClick={() => props.handleClick(value.id)}
          >
            Уд.
          </Button>
        </Grid>
      </Grid>
    </div>
  ));
}

class PhonesList extends React.Component {
  render() {
    return <div>{phonesList(this.props.phones, this.props)}</div>;
  }
}

export default PhonesList;
