import { types } from "../../actions/posts";
import postReducer from "./reducer";

describe("Posts Reducer", () => {
  // check for two things when testing reducers
  // 1. the reducer returns a default state
  // 2. returns new state on receiving a new type

  it("Should return a default state", () => {
    const newState = postReducer(undefined, {}); // we pass empty object as action so that it does not match anything and returns default state as expected
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      {
        title: "Test 1",
      },
      {
        title: "Test 2",
      },
    ];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
