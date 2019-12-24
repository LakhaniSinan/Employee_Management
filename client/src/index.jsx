import React, { Component } from "react";
import reactDOM from "react-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddEmployee from "./addEmployee";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }

  componentDidMount() {
    console.log("working");
    fetch("/api/employee")
      .then(res => res.json())
      .then(employee => this.setState({ employee }));
  }

  onSubmitEvent(event) {
    event.preventDefault();
  }

  deleteEmployee = async data => {
    console.log("successfully deleted", data);
    axios.delete(`/api/employee/${data}`).then(res => console.log(res));
    const employees = this.state.employee.filter(c => c._id !== data);
    this.setState({ employee: employees });
  };

  updateEmployeeInfo = data => {};

  handleAddEmployee =async () => {
    const app = await axios.get('/api/employee')
    window.location.reload();
  };

  renderEmployee = () => {
    const employees = this.state.employee.map(emp => {
      return (
        <div key={emp._id}>
          <div key={emp._id}>
            <h4 style={{ marginLeft: "15px" }}>{emp.name}</h4>
            <div className="btn btn-group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.deleteEmployee(emp._id)}
              >
                Delete
              </button>

              <button type="button" className="btn btn-info">
                View
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.updateEmployeeInfo(emp._id)}
              >
                Update
              </button>
            </div>

            <hr />
          </div>
        </div>
      );
    });
    return employees;
  };

  render() {
    console.log(this.state.employee);
    return (
      <div className="container">
        {this.renderEmployee()}
        <AddEmployee onAddEmployee={this.handleAddEmployee} />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById("root"));
