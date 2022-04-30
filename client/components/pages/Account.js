import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../store/auth";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.auth ? this.props.auth.firstName : "",
      lastName: this.props.auth ? this.props.auth.lastName : "",
      email: this.props.auth ? this.props.auth.email : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    try {
      await this.props.updateUser({ ...this.state });
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    const auth = this.props.auth;
    return (
      <div>
        <h1>User Account Information</h1>
        <div className="editIcon">edit icon here</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* <table className="accountInfo">
          <tbody>
            <tr>
              <th>First Name:</th>
              <td>{auth.firstName}</td>
            </tr>
            <tr>
              <th>Last Name:</th>
              <td>{auth.lastName}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{auth.email}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>Street Address, City, State, zip</td>
            </tr>
          </tbody>
        </table> */}

        <div className="accountLinks">
          <button>Update Password</button>
          <div className="internalLink">
            <Link to="/order_history">Order History</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
};

const mapState = (state) => {
  return {
    auth: state.auth,
    order: state.order
  };
};

export default connect(mapState, mapDispatch)(Account);
