import React, { useState, useMemo, useEffect } from 'react'
import { format, subDays, addDays } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { utcToZonedTime } from 'date-fns-tz'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { api } from '~/services/api'

import { Container, Time } from './styles'

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function HistoryPoints() {
  const [date, setDate] = useState(new Date())
  const [point, setPoint] = useState([])

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  )

  useEffect(() => {
    async function loadRecords() {
      const response = await api.get('pointrecords', {
        params: { date }
      })

      setPoint(response);
      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

      // const data = range.map(hour => {
      //   const compareDate = utcToZonedTime(date, timezone);
      // })
    }
    loadRecords()
  }, [date])

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
        </Time>

        <Time>
          <strong>12:00 - Entrada Intervalo</strong>
          <p>Nsr: 6</p>
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
        </Time>

        <Time>
          <strong>12:00 - Entrada Intervalo</strong>
          <p>Nsr: 6</p>
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
        </Time>
      </ul>
    </Container>
  )
}
