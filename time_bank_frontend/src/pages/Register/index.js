import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { registerRequest } from '~/store/modules/auth/actions'

import { Wrapper, Content } from './styles'

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatorio'),
  pis: Yup.string().required('Campo Obrigatorio'),
  email: Yup.string()
    .email('Favor inserir e-mail valido')
    .required('Campo Obrigatorio'),
})

export default function Register() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ name, pis, email }) {
    dispatch(registerRequest(name, pis, email))
  }

  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="pis" type="text" placeholder="PIS" />
        <Input name="email" type="email" placeholder="E-mail" />

        <button type="submit">
          {loading ? 'Carregando ... ' : 'Acessar'}
        </button>
      </Form>
    </Content>
  )
}
