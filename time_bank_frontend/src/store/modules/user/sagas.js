import { call, all, put, takeLatest } from 'redux-saga/effects'

import { toast } from 'react-toastify';

import { api } from '~/services/api';

import { updateUserSuccess, updateUserFailure } from './actions'

export function* updateUser({ payload }) {
  try {
  const { name, email, avatar_id, ...rest } = payload.data;

  const user = Object.assign(
    { name, email, avatar_id },
    rest.oldPassword ? rest : {}
  )

  const response = yield call(api.put, 'users', user);

  toast.success('Perfil atualizado com sucesso!');

  yield put(updateUserSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateUserFailure())
  }
}

export function* registerRecord({ payload }) {
  try {
    const { date, user_id, pointtype_id } = payload;

    yield call(api.post, 'pointrecords', {
      localization: 'false',
      date,
      user_id,
      enterprise_id: 1,
      pointtype_id
    });
  } catch (err) {
    toast.error('Falha ao registrar no sistema')
  }
}

export default all([
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@user/REGISTER_RECORD', registerRecord),
])
