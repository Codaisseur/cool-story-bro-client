import reducer from "./reducer";
import { FETCH_SPACES_SUCCESS } from "./actions";

describe("spaceReducer", () => {
  const initialState = [];

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_SPACE_SUCCESS action type", () => {
    test("returns a new state with the payload array included", () => {
      const spaces = [{}, {}];
      const action = { type: FETCH_SPACES_SUCCESS, payload: spaces };
      const newState = reducer(initialState, action);
      expect(newState).toHaveLength(spaces.length);
      expect(newState).toEqual(spaces);
    });
  });
});
