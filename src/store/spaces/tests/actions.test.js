import axios from "axios";
import {
  FETCH_SPACES_SUCCESS,
  fetchSpacesSuccess,
  fetchSpaces,
} from "./actions";

jest.mock("axios");

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of spaces", () => {
    const spaces = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: FETCH_SPACES_SUCCESS,
        payload: spaces,
      };

      expect(fetchSpacesSuccess(spaces)).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the spaces array", () => {
      const action = fetchSpacesSuccess(spaces);
      expect(action.payload).toHaveLength(spaces.length);
    });
  });
});

describe("#fetchSpaces", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_SPACES_SUCCESS", async () => {
      const fakeSpaces = [{}, {}];
      const response = { data: { spaces: { rows: fakeSpaces } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
      await fetchSpaces()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(fetchSpacesSuccess(fakeSpaces));
      expect(getState).toHaveBeenCalledTimes(1);
    });
  });
});
