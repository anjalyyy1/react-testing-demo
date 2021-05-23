import React from "react";
import { findByTestAtrr, checkProps } from "../../utils";
import ListItem from "./index";
import { shallow } from "enzyme";

describe("List item button component", () => {
  it("Should not throw a warning", () => {
    const props = {
      title: "Test title",
      desc: "Test desc",
    };
    const componentWarnings = checkProps(ListItem, props);
    expect(componentWarnings).toBeUndefined();
  });

  describe("Component render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test desc",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });
});
