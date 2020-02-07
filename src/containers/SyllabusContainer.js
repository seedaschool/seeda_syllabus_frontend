import React, { Component } from 'react';
import SyllabusCard from '../components/SyllabusCard'
import CardDeck from 'react-bootstrap/CardDeck';

class SyllabusContainer extends Component {

  state = {

  }

  render() {
    return this.props.syllabi ? ( // why do i need to do this? research lifecycle
      <React.Fragment>
      {/* SYLLABUS CONTAINER */}
      {/*<Syllabus syllabus={ayanaSyllabus} />*/}
       {/*Render a list of syllabi for user to display*/}
       <CardDeck>
      {this.props.syllabi.map(syllabus => {
        return <SyllabusCard syllabus={syllabus} />
      })}
      </CardDeck>
      </React.Fragment>
    ) : null
  }

}

export default SyllabusContainer;
