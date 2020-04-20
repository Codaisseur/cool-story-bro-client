import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Space from ".";

describe("<Space >", () => {
  const props = {
    title: "My space!",
    color: "#435234",
    backgroundColor: "#435234",
    id: 1,
    description: "some description",
  };

  test("should render without props", () => {
    const component = renderer.create(<Space />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render with all props", () => {
    const component = renderer.create(<Space {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render link if showLink prop is true", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Space {...props} showLink={true} />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
