import React, { Component } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateUserRequest } from '~/store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import {Container, Text} from './styles.js';

export default function Profile(){
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user)

  function handleSubmit(data) {
    dispatch(updateUserRequest(data))
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      {/* <div> {loading} </div> */}
       <Form initialData={user} onSubmit={handleSubmit}>
       {/* <AvatarInput name="avartar_id" /> */}

       <Input name="name" placeholder="Nome Completo" />
       <Input name="email" type="email" placeholder="Seu endereco de email" />

       <hr />

       <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
       <Input type="password" name="password" placeholder="Nova senha" />
       <Input type="password" name="confirmPassword" placeholder="Confirmacao de senha" />

      <button type="submit">Atualizar perfil</button>
     </Form>

     <button type="button" onClick={handleSignOut}>Logout</button>
    </ Container>
  );
  }
