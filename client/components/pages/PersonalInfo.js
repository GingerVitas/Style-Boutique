import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../store/auth";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
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
      <Box textAlign="center" sx={{ p: 2 }}>
        <div>
          <Grid container direction="column" justifyContent="left" alignItems="left" spacing={1} sx={{ display: "flex" }}>
            <Grid item lg={6} sx={{ width: "100%" }}>
              <Typography variant="h4">Personal Information</Typography>
            </Grid>
            <div className="account-body">
              {/* <form className="contact-info"> */}
              <Grid item xs={6} sx={{ width: "100%" }}>
                <Typography variant="h6">
                  First Name
                  <TextField name="firstName" type="text" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.firstName} onChange={this.handleChange} />
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ width: "100%" }}>
                <Typography variant="h6">
                  Last Name
                  <TextField name="lastName" type="text" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.lastName} onChange={this.handleChange} />
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ width: "100%" }}>
                <Typography variant="h6">
                  Email
                  <TextField name="email" type="email" size="small" variant="outlined" required id="outlined-password-input" style={{ width: "60%" }} disabled={this.state.edit ? false : true} value={this.state.email} onChange={this.handleChange} />
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ width: "100%" }}>
                <Button
                  color="black"
                  variant="contained"
                  sx={{ mb: 2 }}
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
                {/* </form> */}
              </Grid>

              <div>
                <Password />
                <Button color="black" style={{ m: 1, width: "50%", padding: "10px", fontSize: "1rem" }} variant="contained">
                  Update Password
                </Button>
              </div>
            </div>
          </Grid>
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
