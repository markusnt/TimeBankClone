import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/gifmaluco.gif'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Favor inserir e-mail valido')
    .required('Campo Obrigatorio'),
  password: Yup.string().required('Campo Obrigatorio'),
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img src={logo} alt="TimeBank" />

      <h1> Time Bank </h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">
          {loading ? 'Carregando ... ' : 'Acessar'}{' '}
        </button>
      </Form>
    </>
  )
}
