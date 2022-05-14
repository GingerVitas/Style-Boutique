import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../store/auth";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Password from "../Password";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.auth ? this.props.auth.firstName : "",
      lastName: this.props.auth ? this.props.auth.lastName : "",
      email: this.props.auth ? this.props.auth.email : "",
      edit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleSubmit(ev) {
    console.log(this.state);
    ev.preventDefault();
    try {
      const { edit, ...user } = this.state;
      this.props.updateUser(user);
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
        <Box sx={{ p: 2, textAlign: "center" }}>
          <div>
            <Typography variant="h4">Personal Information</Typography>
          </div>
        </Box>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ flexBasis: "30%" }}>
              First Name
            </Typography>
            <TextField name="firstName" type="text" size="small" sx={{ flexBasis: "70%" }} variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.firstName} onChange={this.handleChange} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ flexBasis: "30%" }}>
              Last Name{" "}
            </Typography>
            <TextField name="lastName" type="text" size="small" sx={{ flexBasis: "70%" }} variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.lastName} onChange={this.handleChange} />
          </div>
          <div style={{ display: "flex", alignItems: "space-around" }}>
            <Typography variant="h6" sx={{ flexBasis: "30%" }}>
              Email{" "}
            </Typography>
            <TextField name="email" type="email" size="small" sx={{ flexBasis: "70%" }} variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.email} onChange={this.handleChange} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button color="black" variant="contained" sx={{ mb: 2, maxWidth: "20vw" }} onClick={this.state.edit ? (ev) => this.handleSubmit(ev) : (ev) => this.handleEdit(ev)}>
              {this.state.edit ? "SUBMIT" : "EDIT"}
            </Button>
          </div>
          <div>
            <Password />
            <Button color="black" style={{ m: 1, width: "50%", padding: "10px", fontSize: "1rem" }} variant="contained">
              Update Password
            </Button>
          </div>
        </Box>
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

export default connect(mapState, mapDispatch)(PersonalInfo);
