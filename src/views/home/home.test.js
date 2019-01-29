/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { shallow } from "enzyme";
import Home from "./home";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test("should render ok", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
