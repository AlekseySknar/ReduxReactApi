import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneAdded from "./phoneAdded";
import { addNewPhone } from "../actions/action-phones";
import store from "../store";

class PhoneAddedRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: "", model: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  handleClick(phon) {
    store.dispatch(
      addNewPhone({ phone: this.state.phone, model: this.state.model })
    );
    console.log(phon);
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleChangeModel(event) {
    this.setState({ model: event.target.value });
  }

  render() {
    return (
      <PhoneAdded
        handleClick={this.handleClick}
        handleChangeModel={this.handleChangeModel}
        handleChangePhone={this.handleChangePhone}
        phoneValue={this.state.phone}
        modelValue={this.state.model}
      />
    );
  }
}

/*const mapStateToProps = function(store) {
  return {
    phoneProfile: store.phoneState.phoneProfile
  };
};

export default connect(mapStateToProps)(PhoneAddedRedux); */

export default PhoneAddedRedux;
