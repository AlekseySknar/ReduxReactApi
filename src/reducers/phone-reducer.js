import * as types from "../actions/action-types";
import _ from "lodash";

const initialState = {
  phones: [],
  phoneProfile: {
    id: "", //Айди
    phone: "", //Производитель
    model: "" //Модель
  }
};

const phoneReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHONES_SUCCESS:
      return Object.assign({}, state, { users: action.phones });

    case types.DELETE_PHONES_SUCCESS:
      // Use lodash to create a new user array without the user we want to remove
      const newPhones = _.filter(
        state.phones,
        phone => phone.id !== action.phoneId
      );
      return Object.assign({}, state, { phones: newPhones });

    case types.ADD_PHONES_SUCCESS:
      //Определяем ID по последнему фону
      var id = 0;
      if (state.phones.length === 0) {
        id = 0;
      } else {
        id = state.phones[state.phones.length - 1].id + 1;
      }
      //Добавляем ID в профайл
      action.phoneProfile.id = id;
      //Просто добавляем новый телефон в список
      return Object.assign({}, state, {
        phones: state.phones.concat(action.phoneProfile)
      });

    default:
      return state;
  }
};

export default phoneReducer;
