import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
      <section className="admin-container">
        <form>
          <label className="admin-project-name">
            Project Name:
             <input type="text" name="name" />
          </label>
          <label className="admin-project-des">
            Project Description:
             <input type="text" name="description" />
          </label>
          <label className="admin-project-link">
            Project Link on Git:
             <input type="text" name="link" />
          </label>
          <label className="admin-project-create-date">
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


