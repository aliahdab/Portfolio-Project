import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
      <section className="admin-container">
        <form className="admin-form">
          <h2> Add a project
          </h2>
          <label className="admin-label">
            Project Name:
             <input type="text" name="name" />
          </label>
          <label className="admin-label">
            Project Description:
             <textarea type="text" name="description" />
          </label>
          <address className="admin-label">
            Project Address:
             <input type="text" name="link" />
          </address>
          <label className="admin-label">
            Project Creation Date:
             <input type="text" name="link" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </section>
    )

  }
}

export default Admin


