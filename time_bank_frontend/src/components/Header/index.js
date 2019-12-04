import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import logo from '~/assets/gifmaluco.gif'

import { Container, Content, Profile, Menu } from './styles'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = { isCool: false }
  }

  toggleCoolness = () => {
    this.setState({ isCool: !this.state.isCool })
  }

  render(){
    const {isCool} = this.state;
  return (
    <Container>
      <Content>
        <nav>
          <FaBars onClick={this.toggleCoolness}/>
          <Link to="/dashboard">Time Bank</Link>
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
            <Link to="/dashboard" onClick={this.toggleCoolness} >Dashboard</Link>
          </li>
          <li>
            {/* <Link>Dashboard</Link> */}
          </li>
          <li>
            <Link to="/register" onClick={this.toggleCoolness} >Registrar novo usuario</Link>
          </li>
          <li>
            <Link to="/profile" onClick={this.toggleCoolness} >Perfil</Link>
          </li>
        </ul>
      </Menu>
      ) : (<></>)}
    </Container>
  )
  }
}
