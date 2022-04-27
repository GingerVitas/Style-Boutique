import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <h1>User Account Information</h1>
      <div>edit icon here</div>
      <div>First Name: Last Name: Email: Address: Update Password </div>
      <Link to="/order_history">Order History</Link>
    </div>
  );
};

export default Account;
