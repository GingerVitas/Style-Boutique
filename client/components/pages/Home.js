import React from "react";
import { connect } from "react-redux";
import Products from "../Products";

/**
 * COMPONENT
 */
const Home = (props) => {
  const { username } = props;

  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "Right",
    //   alignItems: "Right",
    //   height: "100vh",
    // }}
    >
      <h3>Welcome, {username ? username : "Guest"}</h3>
      <Products />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
