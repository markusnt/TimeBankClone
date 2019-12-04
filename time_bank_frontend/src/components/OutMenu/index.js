import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import { Menu } from './styles'

export default class OutMenu extends Component {
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
    <>
    <button onClick={this.toggleCoolness}> Click Me </button>
      {isCool ? (
        <Menu>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {/* <Link>Dashboard</Link> */}
          </li>
          <li>
            <Link to="/register">Registrar novo usuario</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
        </ul>
      </Menu>
      ) : (<></>)}
    </>
  )
  }
}
