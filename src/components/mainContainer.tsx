import React from "react";
import Grid from "@material-ui/core/Grid";
import PhoneAdded from "./phoneAdded";
import PhonesList from "./phonesList";
import PhoneAddedRedux from "./phoneAddedRedux";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <PhoneAddedRedux />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>Заглушка</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContainer;
