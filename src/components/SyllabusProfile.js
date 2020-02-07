import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import {withRouter} from 'react-router-dom';


class SyllabusProfile extends Component {

  state = {

  }

  render() {
    return this.props.syllabus ? ( // why do i need to do this? research lifecycle
      <React.Fragment>
        {/* SYLLABUS PROFILE */}
        <h1>{this.props.syllabus.title}</h1>
        <Table responsive>
          <thead>
            <tr class="float-right">
              <th >Name: {this.props.syllabus.user.name}</th>
              <th>Date: </th>
            </tr>
          </thead>
          <tbody>
            <tr>Title</tr>
            <tr>
              <th>Title</th>
            </tr>
          </tbody>
        </Table>
        <p>Concentrations: {this.props.syllabus.concentrations.map(concentration => {
          return concentration.title
        }).join(", ")}</p>
        <p>Projects: {this.props.syllabus.projects.map(project => {
          return project.title
        }).join(", ")}</p>
        <p>Goals: {this.props.syllabus.goals.map(goal => {
          return goal.description
        }).join(", ")}</p>
        <p>Accountability Partners: {this.props.syllabus.acct_partners.map(partner => {
          return partner.name
        }).join(", ")}</p>
        <p>Accountability Metrics: {this.props.syllabus.acct_metrics.map(metric => {
          return metric.metric
        }).join(", ")}</p>
        <p>Keywords:</p> {this.props.syllabus.keywords.map(keyword => {
          return <li>{keyword.word}</li>
        })}
        <p>Resources:</p> {this.props.syllabus.resources.map(resource => {
          return <li>{resource.title}</li>
        })}


      </React.Fragment>
    ) : null
  }

}
export default withRouter(SyllabusProfile)
