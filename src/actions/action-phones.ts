import * as types from "../actions/action-types";

export function getPhoneSuccess(phones) {
  return {
    type: types.GET_PHONES_SUCCESS,
    phones
  };
}

export function deletePhoneSuccess(phoneId) {
  return {
    type: types.DELETE_PHONES_SUCCESS,
    phoneId
  };
}

export function addNewPhone(phoneProfile) {
  return {
    type: types.ADD_PHONES_SUCCESS,
    phoneProfile
  };
}
