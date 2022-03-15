import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = { data: [] };
  async componentDidMount() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ data: result.data });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
