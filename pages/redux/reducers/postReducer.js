import * as ActionTypes from "../actions/actionTypes";

export default function postsReducer(
  state = {
    isLoading: true,
    errMsg: null,
    posts: [],
  },
  action
) {
  switch (action.type) {
    case ActionTypes.GET_ALL_POST:
      console.log("SUCCESS...");
      return { ...state, isLoading: false, errMsg: null, post: action.payload };
    case ActionTypes.GET_ALL_POST_LOADING:
      console.log("LOADING....");
      return { ...state, isLoading: true, errMsg: null, post: [] };
    case ActionTypes.GET_ALL_POST_FAILED:
      console.log("FAILED...");
      return { ...state, isLoading: false, errMsg: action.payload, post: [] };
    default:
      return state;
  }
}
