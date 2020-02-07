import React, { Component } from "react";
import { connect } from "react-redux";
import PhonesList from "../views/phones-list";
import { deletePhoneSuccess } from "../../actions/action-phones";
import store from "../../store";

class PhoneListRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: "", model: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(phoneID) {
    store.dispatch(deletePhoneSuccess(phoneID));
  }

  render() {
    return (
      <PhonesList handleClick={this.handleClick} phones={this.props.phones} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    phones: store.phoneState.phones
  };
};

export default connect(mapStateToProps)(PhoneListRedux);
