import React, { Component } from 'react';

class UserProfile extends Component {

  state = {

  }

  render() {
    return this.props.user ? ( // why do i need to do this? research lifecycle
      <React.Fragment>
      <h4>
        {this.props.user.name}'s Profile
      </h4>
      <p>Username: {this.props.user.username}</p>
      <p>Email: {this.props.user.email}</p>
      <p>Website: {this.props.user.website}</p>
      <p>Location: {this.props.user.location}</p>
      <p>Bio: {this.props.user.bio}</p>
      </React.Fragment>
    ): null
  }

}

export default UserProfile;
