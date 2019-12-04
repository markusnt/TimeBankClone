import React, { Component } from 'react'

import Header from '../Header/index'
import api from '../../services/api'

import statusButton1 from '../../resource/ButtonP1.png'
import statusButton2 from '../../resource/ButtonP2.png'
import statusButton3 from '../../resource/ButtonP3.png'
import statusButton4 from '../../resource/ButtonP4.png'
import statusButton5 from '../../resource/ButtonP5.png'

import { Container, StateButton } from './styles'

export default class PointRecord extends Component {
  state = {
    apiTime: null,
    unixtime: null,
    iconPosition: 0,
    record1: null,
    record2: null,
    record3: null,
    record4: null,
  }
  // this.handleUpdateStateIcon = this.handleUpdateStateIcon.bind(this)
  // this.handleUpdateImgIcon = this.handleUpdateImgIcon.bind(this)

  async componentDidMount() {
    const response = await api.get(``);
    const data = {
      unixtime: response.data.unixtime
    };

    this.setState({
      apiTime: data.unixtime
    })
  }
  handleSubmit = async () => {
    const response = await api.get(``);

    const data = {
      unixtime: response.data.unixtime
    };

    this.setState({
      unixtime: data.unixtime
    })
    // return data.unixtime
    // console.log(data.unixtime)
  }


//   componentDidUpdate(_, prevState) {
//     if (prevState.techs !== this.state.techs) {
//         localStorage.setItem('techs', JSON.stringify(this.state.techs))
//     }
// }

  handleUpdateStateIcon = async () => {
    const { iconPosition, apiTime, unixtime } = this.state
    this.handleSubmit()
    
    if (iconPosition < 4) {
      if (iconPosition === 0) {
          this.setState({
          record1: unixtime,
        })
        console.log(unixtime)
      } else if (iconPosition === 1) {
        this.setState({
          record2: apiTime,
        })
      } else if (iconPosition === 2) {
        this.setState({
          record3: apiTime,
        })
      } else {
        this.setState({
          record4: apiTime,
        })
      }
      this.setState({
        iconPosition: this.state.iconPosition + 1,
      })
      // } else {
      //   this.setState({
      //     index: this.state.index - 4,
      //   })
    }
  }

  handleUpdateImgIcon = () => {
    const { iconPosition } = this.state

    if (iconPosition === 1) {
      return <img src={statusButton2} alt="statusButton2" />
    } else if (iconPosition === 2) {
      return <img src={statusButton3} alt="statusButton3" />
    } else if (iconPosition === 3) {
      return <img src={statusButton4} alt="statusButton4" />
    } else if (iconPosition === 4) {
      return <img src={statusButton5} alt="statusButton5" />
    } else {
      return <img src={statusButton1} alt="statusButton1" />
    }
  }

  handleDateConverter = UNIX_timestamp => {
    var a = new Date(UNIX_timestamp * 1000)
    var months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ]
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var time = date + ' de ' + month + ' ' + year
    return time
  }

  handleTimeConverter = UNIX_timestamp => {
    var a = new Date(UNIX_timestamp * 1000)
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()
    var time = hour + ':' + min + ':' + sec
    // debugger
    return time
  }

  render() {
    const { apiTime, record1, record2, record3, record4 } = this.state

    return (
      <>
        <Header />
        <Container>
          <span> {apiTime === 0 ? '--' : this.handleDateConverter(apiTime)} </span>
          <span> {this.handleTimeConverter(apiTime)} </span>

          <button onClick={this.handleSubmit} > aa </button>

          <StateButton
            className="stateButton"
            onClick={() => this.handleUpdateStateIcon()}
          >
            {this.handleUpdateImgIcon()}
          </StateButton>
          {this.state.record2}
          <span>
            Entrada: {record1 == null ? '--' : this.handleTimeConverter(record1)}
          </span>
          <span>
            Entrada Intervalo: {record2 == null ? '--' : this.handleTimeConverter(record2)}
          </span>
          <span>
            Saida Intervalo: {record3 == null ? '--' : this.handleTimeConverter(record3)}
          </span>
          <span>
            Saida: {record4 == null ? '--' : this.handleTimeConverter(record4)}
          </span>
        </Container>
      </>
    )
  }
}
