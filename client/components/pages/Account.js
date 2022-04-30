import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {auth} = this.props;
    console.log('ACOUNTTTTTTT', auth)
    return (
      <div>
        <h1>User Account Information</h1>
        <div className="editIcon">edit icon here</div>
        <table className="accountInfo">
          <tbody>
            <tr>
              <th>First Name:</th>
              <td>.firstName</td>
            </tr>
            <tr>
              <th>Last Name:</th>
              <td>.lastName</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>.email</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>Street Address, City, State, zip</td>
            </tr>
          </tbody>
        </table>

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

const mapState = (state) => {
  return {
    auth: state.auth,
    order: state.order
  };
};


export default connect(mapState)(Account);
