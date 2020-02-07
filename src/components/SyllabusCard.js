import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {withRouter} from 'react-router-dom';


class SyllabusCard extends Component {

  state = {

  }

  render() {
    return this.props.syllabus ? ( // why do i need to do this? research lifecycle
      <React.Fragment>
      {/* SYLLABUS CONTAINER */}

        <Card
          onClick={() => this.props.history.push(`/syllabus/${this.props.syllabus.id}`)}
        >
          <Card.Body>
            <Card.Title>Title: {this.props.syllabus.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.syllabus.concentrations.map(concentration => concentration.title).join(", ")}
            </Card.Subtitle>
            <Card.Text>
              {this.props.syllabus.description.substr(0, 100)}...
            </Card.Text>
            <Card.Link href="#">{this.props.syllabus.user.name}</Card.Link>
            {/*<Card.Link href="#">Another Link</Card.Link>*/}
          </Card.Body>
        </Card>
      </React.Fragment>
    ) : null
  }

}
export default withRouter(SyllabusCard)
