import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../utils";

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  // checking if the header is rendered as expected using data-test
  it("should render without errors", () => {
    // const wrapper = component.find(".headerComponent");
    const wrapper = component.find(`[data-test='headerComponent']`);
    expect(wrapper.length).toBe(1);
  });

  // checking for logo using class name
  it("should render logo", () => {
    const wrapper = findByTestAtrr(component, "logo");
    expect(wrapper.length).toBe(1);
  });
});
