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
});
