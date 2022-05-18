/* global describe beforeEach it */

import { expect } from "chai";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Home } from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  let home;

  beforeEach(() => {
    home = shallow(<Home username="cody" />);
  });

  it("renders the email in an h3", () => {
    expect(home.find("h3").text()).to.be.equal("Welcome, cody");
  });
});
