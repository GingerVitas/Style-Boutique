import React from "react";
import { connect } from "react-redux";

const Addresses = ({ address }) => {
  return (
    <div>
      <ul>All addresses listed here</ul>
    </div>
  );
};

export default connect((state) => state)(Addresses);
