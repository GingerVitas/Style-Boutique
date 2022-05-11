import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Addresses = ({ address }) => {
  return (
    <div>
      <h4>Shipping Addresses</h4>
      <div>
        <ul>
          All addresses will be listed here.
          <button>Edit</button>
          <button>Remove</button>
        </ul>
      </div>

      <div>
        <button id="addAddress">Add New Address</button>
        <div>
          <form className="addAddressForm">
            <label className="addressLabel">
              First Name
              <input name="firstName" type="text" />
            </label>
            <label className="addressLabel">
              Last Name
              <input name="lastName" type="text" />
            </label>
            <label className="addressLabel">
              Street Address
              <input name="street" type="text" />
            </label>
            <label className="addressLabel">
              Apt/Suite
              <input name="aptNum" type="text" />
            </label>
            <label className="addressLabel">
              Zip Code
              <input name="zip" type="text" />
            </label>
            <label className="addressLabel">
              City
              <input name="city" type="text" />
            </label>
            <label className="addressLabel">
              State/Province
              <input name="state" type="text" />
            </label>
            <button className="checkbox" onClick={() => {}}>
              Make this my default shipping address.
            </button>
            <button className="save" onClick={() => {}}>
              SAVE
            </button>
          </form>
          <div id="cancelLink">
            <Link to="/addresses">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state)(Addresses);
