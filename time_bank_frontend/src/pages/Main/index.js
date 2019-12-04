import React from 'react'

import { FaLongArrowAltRight } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles'

import logo from '../../resource/gifmaluco.gif'


export default function Main() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      {/* <h1>
        <FaBars />
        Login PAGE
      </h1> */}

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Usuario"></input>
        <input type="text" placeholder="Senha"></input>

        <SubmitButton disabled>
          <FaLongArrowAltRight color="#fff" size={14} />
        </SubmitButton>
      </Form>

    </Container>
  )
}
