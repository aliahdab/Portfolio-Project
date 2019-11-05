import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
      <section className="admin-container">
        <form className="admin-form">
          <h2> Add a project</h2>
          <label className="admin-label">
            Project Name:
             <input type="text" name="name" required />
          </label>
          <address className="admin-label">
            Project Address:
             <input type="text" name="link" required />
          </address>
          <label className="admin-label">
            Project Creation Date:
             <input type="text" name="link" required />
          </label>
          <label className="admin-label">
            Project Description:
             <textarea type="text" name="description" />
          </label>

          <input type="submit" value="Confirm & Add The Project " />
        </form>
      </section>
    )
  }
}

export default Admin


