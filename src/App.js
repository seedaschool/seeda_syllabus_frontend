import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import UserProfile from './components/UserProfile.js'
import NavBar from './components/NavBar.js'
import SyllabusProfile from './components/SyllabusProfile.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import SyllabusContainer from './containers/SyllabusContainer'

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SYLLABI_URL  = "http://localhost:3000/api/v1/syllabuses"
const USERS_URL = "http://localhost:3000/api/v1/users"

class App extends Component {

  state = {
    allUsers: [],
    allSyllabi: [],
    user: null
  }

  fetchUsers = () => {
    fetch(USERS_URL)
    .then(resp => resp.json())
    .then(users => {
      this.setState({ user: users[0]} );
    })
  }

  fetchSyllabi = () => {
    fetch(SYLLABI_URL)
    .then(resp => resp.json())
    .then(allSyllabi => {
      this.setState({ allSyllabi });
    })
  }

  componentDidMount() {
    this.fetchUsers()
    this.fetchSyllabi()
    }


  render() {
    console.log(this.state.allSyllabi);
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return(
              <React.Fragment>
                <div class="sidebar">
                  <NavBar user={this.state.user}/>
                </div>
                <div class="content">
                  <SyllabusContainer syllabi={this.state.allSyllabi} />
                </div>
              </React.Fragment>
            )
          }}
        />
        <Route
          exact
          path="/member"
          render={(props) => {
            return(
              <React.Fragment>
                <div class="sidebar">
                  <NavBar user={this.state.user} />
                </div>
                <div class="content">
                  <UserProfile user={this.state.user}
                  />
                </div>
              </React.Fragment>
            )
          }}
        />
        <Route
          exact
          path="/syllabus/:syllabusId"
          render={(props) => {
            return(
              <React.Fragment>
                <div class="sidebar">
                  <NavBar user={this.state.user} />
                </div>
                <div class="content">
                  <SyllabusProfile
                    syllabus={this.state.allSyllabi.find(syllabus => {
                      return syllabus.id == props.match.params.syllabusId
                    }
                  )}
                  />
                </div>
              </React.Fragment>
            )
          }}
        />
        <Route
          exact
          path="/login"
          render={(props) => {
            return(
              <React.Fragment>
                <div class="sidebar">
                  <NavBar user={this.state.user} />
                </div>
                <div class="content">
                  <Login />
                </div>
              </React.Fragment>
            )
          }}
        />
        <Route
          exact
          path="/register"
          render={(props) => {
            return(
              <React.Fragment>
                <div class="sidebar">
                  <NavBar user={this.state.user} />
                </div>
                <div class="content">
                  <Register />
                </div>
              </React.Fragment>
            )
          }}
        />

      </Switch>
    )
  }

}

export default App;
