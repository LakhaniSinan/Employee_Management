import React, { Component } from "react";
import axios from "axios";

class AddEmployee extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    designation: "",
    salary: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = async e => {
    e.preventDefault();
    const { name, email, password, designation, salary } = this.state;
    
    await axios
      .post("/api/employee", {
        name,
        email,
        password,
        designation,
        salary
      })
      .then(() => this.props.onAddEmployee());
  };
  render() {
    const { name, email, password, designation, salary } = this.state;

    console.log(`${name} ${email} ${password} ${designation}`);
    return (
      <div>
        <div className="modal fade" id="addUser">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Register Employee</h2>
              </div>
              <div className="modal-body">
                <form>
                  <div>
                    <label htmlFor="nameInput">Name</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      id="nameInput"
                      value={name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emailInput">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      type="text"
                      id="emailInput"
                      value={email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="passwordInput">Password</label>
                    <input
                      className="form-control"
                      name="password"
                      type="text"
                      id="passwordInput"
                      value={password}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="designationInput">Designation</label>
                    <input
                      className="form-control"
                      name="designation"
                      type="text"
                      id="designationInput"
                      value={designation}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="salaryInput">Salary</label>
                    <input
                      className="form-control"
                      name="salary"
                      type="text"
                      id="salaryInput"
                      value={salary}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <br />
                  <button
                    className="btn btn-success"
                    type="submit"
                    onClick={this.submitForm}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            className="btn btn-success float-right"
            style={{ borderRadius: "200px" }}
            data-toggle="modal"
            data-target="#addUser"
          >
            <span style={{ padding: "1px" }}> add </span>
          </button>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
