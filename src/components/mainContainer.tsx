import React from "react";
import Grid from "@material-ui/core/Grid";
import PhoneAdded from "./phoneAdded";
import PhonesList from "./phonesList";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <PhoneAdded />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhonesList />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContainer;
