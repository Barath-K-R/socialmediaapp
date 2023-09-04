import React, { useEffect } from "react";
import "./Posts.css";
import { getTimelinePosts } from "../../actions/PostsAction.js";
import { PostsData } from "../../data/PostsData.js";
import Post from "../Post/Post.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Posts = ({ location }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  console.log(params.id)
  if (!posts) return "No Posts";

  if (location === 'homepage')
    posts = posts.filter((post) => post.userId !== user._id);
  else if (location === 'profilePage')
    posts = posts.filter((post) => post.userId === user._id);

  return (
    <div className="Posts">
      {posts.map((post, id) => {
        return <Post postDetails={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
