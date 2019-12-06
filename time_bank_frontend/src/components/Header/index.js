import React, { Component } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { updateUserRequest } from '~/store/modules/user/actions';
import { store } from '~/store'

import logo from '~/assets/gifmaluco.gif'

import { Container, Content, Profile, Menu } from './styles'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCool: false,
      admin: null,
    }
  }

  toggleCoolness = () => {
    this.setState({
      isCool: !this.state.isCool,
      admin: store.getState().user.user.admin
    })
  }

  render() {
    const { isCool, admin } = this.state
    return (
      <Container>
        <Content>
          <nav>
            <FaBars onClick={this.toggleCoolness} />
            <Link to="/dashboard">Time Bank</Link>
            {admin}
          </nav>

          <aside>
            <Profile>
              <img src={logo} alt="time_bank" />
            </Profile>
          </aside>
        </Content>
        {isCool ? (
          <Menu>
            <ul>
              <li>
                <Link to="/dashboard" onClick={this.toggleCoolness}>
                  Dashboard
                </Link>
              </li>

              <li><Link to="/history" onClick={this.toggleCoolness}>
              Historico
                </Link></li>
              {admin === true ? (
                <li>
                  <Link to="/register" onClick={this.toggleCoolness}>
                    Registrar novo usuario
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li>
                <Link to="/profile" onClick={this.toggleCoolness}>
                  Perfil
                </Link>
              </li>
            </ul>
          </Menu>
        ) : (
          <></>
        )}
      </Container>
    )
  }
}
