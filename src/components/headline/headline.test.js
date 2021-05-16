import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import CheckPropsTypes from "check-prop-types";

import { findByTestAtrr, checkProps } from "../../utils";
const setUp = (props) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  // since error in proptypes will warning, thr4 we check for that
  describe("Checking proptypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test header",
        desc: "Test desc",
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc",
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render h1", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    it("Should render descr", () => {
      const component = findByTestAtrr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "header");
      expect(component.length).toBe(0);
    });
  });
});
