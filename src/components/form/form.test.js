/* eslint-env jest */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { shallow } from "enzyme";
import MealForm from "./form";

const meals = [
  {
    mealId: "1",
    desc: "Some meal1",
    priceRange: {
      min: 0,
      max: 20,
      jump: 5
    },
    currency: "EUR"
  },
  {
    mealId: "2",
    desc: "Another meal1",
    priceRange: {
      min: 0,
      max: 50,
      jump: 10
    },
    currency: "EUR"
  }
];

describe("MealForm", () => {
  test("should render ok", () => {
    const wrapper = shallow(
      <MealForm meals={meals} showModal={false} onHide={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
