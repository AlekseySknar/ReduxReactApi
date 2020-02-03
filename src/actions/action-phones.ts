import * as types from "../actions/action-types";

export function getUsersSuccess(phones) {
  return {
    type: types.GET_PHONES_SUCCESS,
    phones
  };
}

export function deleteUserSuccess(phoneId) {
  return {
    type: types.DELETE_PHONES_SUCCESS,
    phoneId
  };
}

export function userProfileSuccess(phoneProfile) {
  return {
    type: types.ADD_PHONES_SUCCESS,
    phoneProfile
  };
}
