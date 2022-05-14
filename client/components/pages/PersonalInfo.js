import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../store/auth";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
//import Password from "../Password";

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
      console.log(user);
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
      <Box textAlign="center" sx={{ p: 2 }}>
        <div>
          <Typography variant="h4">Personal Information</Typography>
          <div className="account-body">
            {/* <Grid container direction="row" alignItems="center">
              <Grid item>
              </Grid> */}

            <form className="contact-info">
              <Typography variant="h6">
                First Name
                {/* <TextField name="firstName" type="text" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.user.firstName} onChange={this.handleChange} /> */}
              </Typography>
              <Typography variant="h6">
                Last Name
                <TextField name="lastName" type="text" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.user.lastName} onChange={this.handleChange} />
              </Typography>
              <Typography variant="h6">
                Email
                <TextField name="email" type="email" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.user.email} onChange={this.handleChange} />
              </Typography>
              {/* </Grid> */}

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
              <Button color="black" style={{ width: "80%", padding: "10px", fontSize: "1rem" }} variant="contained">
                {/* component={Link} to={Password} */}
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </Box>
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
