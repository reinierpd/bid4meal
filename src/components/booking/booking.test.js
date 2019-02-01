/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { shallow, mount } from "enzyme";
import Booking from "./booking";

describe("Booking", () => {
  test("should render ok", () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper).toMatchSnapshot();
  });

  test("User add a meal for a fight", () => {
    const wrapper = mount(<Booking />);

    // open modal
    wrapper
      .find("#btn-add-0")
      .at(0)
      .simulate("click");

    expect(wrapper.state().showModal).toBe(true);

    // select price
    const Mealform = wrapper.find("MealForm");
    Mealform.instance().handlePriceSelected(10);
    expect(Mealform.state().amount).toEqual(10);

    // submit modal
    Mealform.find("button.btn-primary")
      .at(0)
      .simulate("click");

    expect(wrapper.state().showModal).toBe(false);
    expect(wrapper.state()).toMatchSnapshot();
    expect(wrapper.find("Table").at(0)).toMatchSnapshot();
  });

  test("submit all flights meals", () => {
    global.alert = jest.fn();
    const wrapper = shallow(<Booking />);

    // check button is disabled
    expect(wrapper.find("#btn-submit").prop("disabled")).toBe(true);
    wrapper.setState({
      editingFlight: "1"
    });

    wrapper.instance().modalHide({ desc: "1", mealId: "1" });

    // check button still disabled
    expect(wrapper.find("#btn-submit").prop("disabled")).toBe(true);

    wrapper.setState({
      editingFlight: "2"
    });
    wrapper.instance().modalHide({ desc: "2", mealId: "2" });

    // check button now is enabled
    expect(wrapper.find("#btn-submit").prop("disabled")).toBe(false);
    wrapper
      .find("#btn-submit")
      .at(0)
      .simulate("click");

    expect(global.alert).toBeCalledWith(
      JSON.stringify([
        { journeyKey: "1", mealId: "1" },
        { journeyKey: "2", mealId: "2" }
      ])
    );
  });
});
