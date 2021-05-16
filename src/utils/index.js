import CheckPropsTypes from "check-prop-types";

export const checkProps = (component, expectedProps) => {
  const propsErr = CheckPropsTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
