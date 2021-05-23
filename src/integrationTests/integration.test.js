import moxios from "moxios";
import { testStore } from "../utils";
import { fetchPosts } from "../store/actions";

describe("Testing fetch posts action", () => {
  beforeEach(() => {
    moxios.install(); // whenever fetch is called i.e axios is called by fetch posts in this example, axios will be replaced by moxios so that there is no nw call
  });

  afterEach(() => {
    moxios.uninstall(); // restore axios to former state
  });

  test("store is updated", () => {
    const expectedState = [
      {
        title: "Example title",
        body: "Body",
      },
      {
        title: "Example title",
        body: "Body",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
