export function updateUserRequest(data) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: {data}
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_USER_SUCCESS',
    payload: {user}
  };
}

export function updateUserFailure() {
  return {
    type: '@user/UPDATE_USER_REQUEST',
  };
}

export function registerRecord(localization, date, user_id, enterprise_id, pointtype_id) {
  return {
      type: '@user/REGISTER_RECORD',
      payload: { localization, date, enterprise_id, user_id, pointtype_id },
  };
}
