import { FETCH_HOMEPAGES_SUCCESS, fetchHomepagesSuccess } from "../actions";

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
