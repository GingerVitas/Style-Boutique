import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { updateUser } from "../../store/auth";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: this.props.auth ? this.props.auth.firstName : "",
        lastName: this.props.auth ? this.props.auth.lastName : "",
        email: this.props.auth ? this.props.auth.email : "",
      },
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(ev) {
    this.setState({ user: { [ev.target.name]: ev.target.value } });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    try {
      this.props.updateUser({ ...this.state.user });
      this.setState({ edit: false });
    } catch (ex) {
      console.log(ex);
    }
  }

  handleEdit(ev) {
    ev.preventDefault();
    this.setState({ edit: true });
  }

  render() {
    const auth = this.props.auth;
    return (
      <div>
        <h4 className="account-intro">Personal Information</h4>
        <div className="account-body">
          <form className="contact-info">
            <label className="accountLabel">
              First Name
              <input
                name="firstName"
                type="text"
                allownull="false"
                disabled={this.state.edit ? false : true}
                value={this.state.user.firstName}
                onChange={this.handleChange}
              />
            </label>
            <label className="accountLabel">
              Last Name
              <input
                name="lastName"
                type="text"
                allownull="false"
                disabled={this.state.edit ? false : true}
                value={this.state.user.lastName}
                onChange={this.handleChange}
              />
            </label>
            <label className="accountLabel">
              Email
              <input
                name="email"
                type="email"
                allownull="false"
                disabled={this.state.edit ? false : true}
                value={this.state.user.email}
                onChange={this.handleChange}
              />
            </label>
            <Button
              color="black"
              variant="contained"
              onClick={
                this.state.edit
                  ? (ev) => {
                      this.handleSubmit(ev);
                    }
                  : (ev) => {
                      this.handleEdit(ev);
                    }
              }
            >
              {this.state.edit ? "SUBMIT" : "EDIT"}
            </Button>
          </form>
          <div>
            <button id="password">Update Password</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

const mapState = (state) => {
  return {
    auth: state.auth,
    order: state.order,
  };
};

export default connect(mapState, mapDispatch)(PersonalInfo);
