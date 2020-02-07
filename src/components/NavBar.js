import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import {Nav} from 'react-bootstrap';


const HOST_URL = 'http://localhost:3000'


class NavBar extends Component {

  render() {
    return this.props.user ? (
      <React.Fragment>

        <Nav defaultActiveKey="/" className="flex-column">
          <NavLink exact to={"/"}>Home</NavLink>
          <NavLink exact to={"/login"}>Login</NavLink>
          <NavLink exact to={"/register"}>Register</NavLink>
          {/*{CONDITIONALLY RENDER}*/}
          <NavLink exact to={`/member`}>Profile</NavLink>
        </Nav>

      </React.Fragment>
    ) : null
  }
}

export default NavBar;
