import * as ActionTypes from "./actionTypes";
import http from "../../services/httpService";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const fetchAllPost = () => {
  // dispatch(getAllPostLoading(true));

  // const response = await axios.get(`${BASE_URL}/posts`);
  return fetch(`https://jsonplaceholder.typicode.com/posts/`)
  .then(response => response.json())
  .then(posts => getAllPost(posts));
  // setTimeout(() => {
  //   dispatch(getAllPost());
  // }, 2000);
  
};

export const getAllPostLoading = () => ({
  type: ActionTypes.GET_ALL_POST_LOADING,
});

export const getAllPostFailed = (errMsg) => ({
  type: ActionTypes.GET_ALL_POST_FAILED,
  payload: errMsg,
});

export const getAllPost = (posts) => ({
  type: ActionTypes.GET_ALL_POST,
  payload:posts
});
