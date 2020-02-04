import * as types from "../actions/action-types";
import _ from "lodash";

const initialState = {
  phones: [],
  phoneProfile: {
    phone: "Meizu",
    model: "Herna"
  }
};

const phoneReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHONES_SUCCESS:
      return Object.assign({}, state, { users: action.phones });

    case types.DELETE_PHONES_SUCCESS:
      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(
        state.phones,
        phone => phone.id != action.phoneId
      );
      return Object.assign({}, state, { users: newUsers });

    case types.ADD_PHONES_SUCCESS:
      console.log(state.phoneProfile);
      return Object.assign({}, state, { phoneProfile: action.phoneProfile });
  }

  return state;
};

export default phoneReducer;
