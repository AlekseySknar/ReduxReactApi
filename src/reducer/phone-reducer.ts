import * as types from "../actions/action-types";
import _ from "lodash";

const initialState = {
  phones: [],
  phoneProfile: {
    phone: "",
    model: ""
  }
};

const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHONES_SUCCESS:
      return Object.assign({}, state, { users: action.phones });

    case types.DELETE_PHONES_SUCCESS:
      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(
        state.phone,
        phone => phone.id != action.phoneId
      );
      return Object.assign({}, state, { users: newUsers });

    case types.ADD_PHONES_SUCCESS:
      return Object.assign({}, state, { phoneProfile: action.userProfile });
  }

  return state;
};

export default userReducer;
