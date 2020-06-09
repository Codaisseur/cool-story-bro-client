import { FETCH_HOMEPAGES_SUCCESS } from "./actions";
import { HOMEPAGE_UPDATED } from "../user/actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOMEPAGES_SUCCESS:
      return [...state, ...action.payload];
    case HOMEPAGE_UPDATED: {
      return state.map((homepage) => {
        if (homepage.id !== action.payload.id) {
          return homepage;
        }

        return { ...action.payload, stories: [...homepage.stories] };
      });
    }
    default:
      return state;
  }
};
