import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import { findByTestAtrr, testStore } from "./utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [],
    };

    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState should update state", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true); // this shows that the function is called correctly
  });

  it("exampleMethod_returnsAValue should returns a value", () => {
    const classInstance = wrapper.instance();
    const testValue = classInstance.exampleMethod_returnsAValue(10);
    expect(testValue).toBe(11); // this shows that the function is called correctly
  });
});
