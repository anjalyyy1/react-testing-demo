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
    beforeEach(() => {
      const props = {
        buttonText: "Button text",
        emitEvent: () => {},
      };

      wrapper = shallow(<SharedButton {...props} />);
    });
    it("render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
