/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("Home", () => {
  it("should render ok", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
