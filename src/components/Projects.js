import React, { Component } from 'react';
import database from './Firebase';


class Projects extends Component {

  projectsList = [];

  extractData = data => {
    const evaData = data.val();
    const keys = Object.keys(evaData);
    const extractedData = keys.map(key => evaData[key]);
    return extractedData;
  };

  renderData = data => {
    const extractedData = this.extractData(data);
    this.projectsList = extractedData.map((entity, index) => {
      return (
        <div className='project-info-container' key={index}>
          <div className='project-info-name'>{entity.project_name}</div>
          <div className='project-info-url'>{entity.project_url}</div>
          <div className='project-info-date'>{entity.project_date}</div>
          <div className='project-info-description'>{entity.project_description}</div>
        </div>
      )
    });
  }


  getData = () => database.on('value', this.renderData, this.onError);

  render() {
    this.getData();
    setTimeout(() => this.forceUpdate(), 1400);
    return (
      <div >
        <section className="projects-container">
          {this.projectsList}
        </section>
      </div>
    )
  }
}
export default Projects;
