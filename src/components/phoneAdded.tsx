import React, { Component } from "react";
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
              <h1>Добавить телефон</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Марка"
                fullWidth={true}
                value={this.props.phoneValue}
                onChange={this.props.handleChangePhone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-basic"
                label="Модель"
                fullWidth={true}
                value={this.props.modelValue}
                onChange={this.props.handleChangeModel}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth={true}
                onClick={this.props.handleClick}
              >
                Добавить телефон
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default PhoneAdded;
