export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    }
}

export function registerRequest(name, pis, email) {
  return {
    type: '@auth/REGISTER_REQUEST',
    payload: { name, pis, email }
  }
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}
