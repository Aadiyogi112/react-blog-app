import react, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { fetchAllPost } from "../pages/redux/actions/postActionCreator";

const mapStateToProps = (state) => {
  return {
    // dishes:state.dishes
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => {
    dispatch(fetchAllPost());
  },
});

const App = () => {
//   const dispatch = useDispatch();
  //   const postState = useSelector((state) => state.post);

  useEffect(() => {
    // dispatch that action here to get all the posts

    // fetch("https://jsonplaceholder.typicode.com/posts/")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    fetchAllPost();
    console.log("the props coming in from redux", posts);
  });
  return <h1>FIRST JSX ELEMENT</h1>;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
