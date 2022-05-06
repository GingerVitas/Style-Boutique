import React from "react";
import { connect } from "react-redux";

const OrderHistory = () => {
  return (
    <div>
      <ul>All orders listed here</ul>
    </div>
  );
};

export default connect((state) => state)(OrderHistory);
