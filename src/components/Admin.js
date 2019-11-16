import React, { Component } from 'react'
import database from './Firebase';

export class Admin extends Component {

  onSubmit = (event) => {
    const projectName = document.getElementById('project-name');
    const projectDate = document.getElementById('project-date');
    const projectUrl = document.getElementById('project-url');
    const projectDescription = document.getElementById('project-description');
    database.push({
      'project_name': projectName.value,
      'project_description': projectDescription.value,
      'project_url': projectUrl.value,
      'project_date': projectDate.value
    });
  }

  render() {
    return (
      <section className="admin-container">
        <form className="admin-form" onSubmit={this.onSubmit}>
          <h2> Add a project</h2>
          <label className="admin-label">
            Project Name:
             <input id='project-name' type="text" name="name" required />
          </label>
          <address className="admin-label">
            Project Address:
             <input id='project-url' type="url" name="link" required />
          </address>
          <label className="admin-label">
            Project Creation Date:
             <input id='project-date' type="date" name="link" required />
          </label>
          <label className="admin-label">
            Project Description:
             <textarea id='project-description' type="text" name="description" />
          </label>

          <input type="submit" value="Confirm & Add The Project " />
        </form>
      </section>
    )
  }
}
export default Admin


