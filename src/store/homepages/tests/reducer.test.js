import reducer from "../reducer";
import { FETCH_HOMEPAGES_SUCCESS } from "../actions";
import { HOMEPAGE_UPDATED } from "../../user/actions";

describe("homepageReducer", () => {
  describe("if given state === undefined and an action with unknown action type", () => {
    test("should return an initial state", () => {
      const EMPTY_ARRAY = [];
      const UNKNOWN_ACTION = {};
      const initialState = reducer(undefined, UNKNOWN_ACTION);
      expect(initialState).toEqual(EMPTY_ARRAY);
    });
  });

  describe("when given a FETCH_HOMEPAGES_SUCCESS action type", () => {
    test("should update the state with the payload of the action", () => {
      const UNKNOWN_ACTION = {};
      const initialState = reducer(undefined, UNKNOWN_ACTION);

      const fetchHomePageSuccessAction = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: [{}, {}],
      };
      const updatedState = reducer(initialState, fetchHomePageSuccessAction);

      expect(updatedState).toEqual([{}, {}]);
    });

    test("should update the state by adding the pages, not overwriting the ones already in the state", () => {
      const initialState = [{}, {}];

      const fetchHomePageSuccessAction = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: [{}, {}],
      };
      const updatedState = reducer(initialState, fetchHomePageSuccessAction);

      expect(updatedState).toEqual([{}, {}, {}, {}]);
    });
  });

  describe("when given an HOMEPAGE_UPDATED action", () => {
    test("should update the properties of the homepage which matches the id of the payload", () => {
      const initialState = [
        {
          id: 1,
          title: "Hello World",
          stories: [{ id: 1, title: "Today was a good day" }],
        },
        { id: 2, title: "The second son", stories: [] },
      ];

      const updateHomePageAction = {
        type: HOMEPAGE_UPDATED,
        payload: {
          id: 1,
          title: "Hello students",
        },
      };

      const updatedState = reducer(initialState, updateHomePageAction);
      const homepageWithId1 = updatedState.find(
        (homepage) => homepage.id === 1
      );

      const homepageWithId2 = updatedState.find(
        (homepage) => homepage.id === 2
      );

      expect(homepageWithId1).toEqual({
        id: 1,
        title: "Hello students",
        stories: [{ id: 1, title: "Today was a good day" }],
      });

      expect(homepageWithId2).toEqual({
        id: 2,
        title: "The second son",
        stories: [],
      });
    });
  });
});
