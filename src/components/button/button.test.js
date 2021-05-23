import React from "react";
import { findByTestAtrr, checkProps } from "../../utils";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("Shared button component", () => {
  it("should not throw a warning", () => {
    const expectedProps = {
      buttonText: "Button text",
      emitEvent: () => {},
    };

    const propsErr = checkProps(SharedButton, expectedProps);
    expect(propsErr).toBeUndefined();
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Button text",
        emitEvent: mockFunc,
      };

      wrapper = shallow(<SharedButton {...props} />);
    });

    it("render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("should emit cb on click event", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      button.simulate("click"); // means we clicked the button once
      const callbacks = mockFunc.mock.calls.length; // the mock function should be called same of number of times the button was clicked
      expect(callbacks).toBe(1);
    });
  });
});
