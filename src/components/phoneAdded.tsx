import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class PhoneAdded extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h1>Привет</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Standard"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Standard"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Добавить телефон</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default PhoneAdded;
