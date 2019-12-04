import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { geolocated } from 'react-geolocated';

// import { registerRecord } from '~/store/modules/user/actions'
import { register } from '~/store/modules/auth/actions'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {  apiDATE } from '~/services/api'

import { Container, StateButton, Data, RegistroColumn, Registro, Registro2, Registro3, Registro4, ContainerRegistro } from './styles'
import 'react-datepicker/dist/react-datepicker.css'

import statusButton1 from '../../assets/ButtonP1.png'
import statusButton2 from '../../assets/ButtonP2.png'
import statusButton3 from '../../assets/ButtonP3.png'
import statusButton4 from '../../assets/ButtonP4.png'
// import statusButton5 from '../../assets/ButtonP5.png'

export default class Dashboard extends Component {
  state = {
    time: '',
    datetime: '',
    unixtime: null,

    iconPosition: 1,

    recordDataBase: null,
    record1: null,
    record2: null,
    record3: null,
    record4: null,

    horasTrabalhadas: 'this.state.record1'
  }

  async componentDidMount() {
    const response = await apiDATE.get(``)
    const data = {
      unixtime: response.data.unixtime,
    }
    this.setState({
      unixtime: data.unixtime,
    })
  }

  handleSubmit = async () => {
    const response = await apiDATE.get(``)
    const data = response.data.unixtime

    // this.setState({
    //   time: this.timeConverter(data, 'time'),
    // })

    var time = this.timeConverter(data, 'time');

    return time;
  }

  // RegisterRecord = async () => {
  //   const { datetime, recordDataBase, iconPosition } = this.state
  //   const dispatch = useDispatch();
  //   const loading = useSelector(state => state.auth.loading)

  //   await dispatch(registerRecord(datetime, recordDataBase, iconPosition))
  // }

  //   componentDidUpdate(_, prevState) {
  //     if (prevState.techs !== this.state.techs) {
  //         localStorage.setItem('techs', JSON.stringify(this.state.techs))
  //     }
  // }

  timeConverter = (UNIX_timestamp, req) => {
    var a = new Date(UNIX_timestamp * 1000)
    var months = [
      'Janeiro',
      'Fevereiro',
      'Marçp',
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
    // var hourUTC = a.getHours()
    // var hour = hourUTC - 3
    var hour = a.getHours()
    var min = a.getMinutes()
    var sec = a.getSeconds()

    var day = date + ' de ' + month + ', ' + year
    var time = hour + ':' + min + ':' + sec
    var DATATYPE =
      year +
      '-' +
      month +
      '-' +
      date +
      'T' +
      hour +
      ':' +
      min +
      ':' +
      sec +
      '-03:00'

    if (req === 'time') {
      return time
    } else if (req === 'day') {
      return day
    } else {
      var month = a.getMonth()
      return DATATYPE
    }
  }

  handleUpdateStateIcon = async () => {
    const { iconPosition } = this.state
    var a = await this.handleSubmit()

    if (iconPosition < 6) {
      if (iconPosition === 1) {
        this.setState({
          record1: a,
        })
        await this.setState({
          recordDataBase: this.state.record1,
        })
      } else if (iconPosition === 2) {
        this.setState({
          record2: a,
        })
        await this.setState({
          recordDataBase: this.state.record2,
        })
      } else if (iconPosition === 3) {
        this.setState({
          record3: a,
        })
        await this.setState({
          recordDataBase: this.state.record3,
        })
      } else {
        this.setState({
          record4: a,
        })
        await this.setState({
          recordDataBase: this.state.record4,
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
    console.log(this.state.record1)
  }

  handleUpdateImgIcon = () => {
    const { iconPosition } = this.state

    if (iconPosition === 2) {
      // return <img src={statusButton2} alt="statusButton2" />
      return <div className="circleBase type1"></div>
    } else if (iconPosition === 3) {
      // return <img src={statusButton3} alt="statusButton3" />
      return <div className="circleBase type1"></div>
    } else if (iconPosition === 4) {
      // return <img src={statusButton4} alt="statusButton4" />
      return <div className="circleBase type1"></div>
    } else if (iconPosition === 5) {
      // return <img src={statusButton5} alt="statusButton5" />
    } else {
      // return <img src={statusButton1} alt="statusButton1" />
      return <div className="circleBase type1"></div>
    }
  }

  end = async (e, enough) => {
		console.log('END');
        return await (enough ? this.handleUpdateStateIcon() :(toast.error("Falha ao registrar Ponto !!")))
	}

	clickNHold(e){
    toast.success("Ponto Registrado !")
		console.log('Ponto Registrado');
	}

  render() {
    const {
      unixtime,
      iconPosition,
      record1,
      record2,
      record3,
      record4,
    } = this.state

    let horas = this.state.record1
    return (
      <>
        <Container>
          <Data>
            {unixtime === null
              ? 'carregando...'
              : this.timeConverter(unixtime, 'day')}
          </Data>

          {/* <span>
            {unixtime === null
              ? 'carregando...'
              : this.timeConverter(unixtime, 'time')}
          </span> */}

              {iconPosition === 5 ? (
                <span>Tenha um bom descanso</span>
              ) : (
                <StateButton
                time={2} // Time to keep pressing. Default is 2
                onClickNHold={this.clickNHold} //Timeout callback
                onEnd={this.end}
                >
                  {this.handleUpdateImgIcon()}
                </StateButton>

              )}
          <ContainerRegistro>
            <RegistroColumn>
              { record1 == null ? null :
              <Registro>
                {record1}
              </Registro>
              }
              { record2 == null ? null :
              <Registro>
                {record2}
              </Registro>
              }
            </RegistroColumn>
          <RegistroColumn>
          { record3 == null ? null :
              <Registro>
                {record3}
              </Registro>
              }
            { record4 == null ? null :
              <Registro>
                {record4}
              </Registro>
              }
          </RegistroColumn>

          </ContainerRegistro>


        </Container>
      </>
    )
  }
}
