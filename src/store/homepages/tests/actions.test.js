// The first step is importing axios in our test file
import axios from "axios";
import {
  FETCH_HOMEPAGES_SUCCESS,
  fetchHomepagesSuccess,
  fetchHomepages,
} from "../actions";

// Then, we tell jest that we want this module/package mocked.
jest.mock("axios");

describe("#fetchHomepages", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_HOMEPAGES_SUCCESS", async () => {
      // mock axios implementation
      // Inside our test case we can define what we want this mock to return:
      const response = { data: { homepages: { rows: [{}, {}] } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      // mock other two functions
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ homepages: [] });

      await fetchHomepages()(dispatch, getState); // call it twice because it's a thunk, we simulate redux

      // assert on dispatch

      // or get more specific about it
      expect(getState).toHaveBeenCalled();
      expect(getState).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: [{}, {}],
      });
    });
  });
});

describe("#fetchHomepagesSuccess", () => {
  describe("if given an array of homepages", () => {
    test("should return an action object", () => {
      // here is where our test cases will go
      const homepages = [{}, {}];
      // build action we expect to get back
      const expected = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: [{}, {}],
      };
      // call function
      const action = fetchHomepagesSuccess(homepages);
      // do assertion on function return
      expect(action).toEqual(expected);
    });
  });
});
