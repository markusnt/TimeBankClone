import React, { useState, useMemo } from 'react'
import { format, subDays, addDays } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { api } from '~/services/api'

import { Container, Time } from './styles'

export default function HistoryPoints() {
  const [date, setDate] = useState(new Date())

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  )

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <header>
        <p>saldo do dia . . .</p>
      </header>

      <ul>
        <Time>
          <strong>08:00 - Entrada</strong>
          <p>Nsr: 1</p>
          <br />

          <span>Markus Nathan Marques</span>
          <span>Pis: 123456789</span>
          <br />

          <span>Empresa:</span>
          <span>AWS Code</span>
          <span>Cnpj: 33136331000102</span>
          <br />

          <span>Endereço:</span>
          <span>Uberlândia - MG</span>
          <span>Tibery</span>
          <span>Av. Rondon Pacheco 4600 - Sala 131</span>
          <span>38405-142</span>

          {/* <span>$2a$08$NwaxIHDEJZSO2GZrxXQ20.RBoXbs4q5</span> */}
        </Time>
      </ul>
    </Container>
  )
}
