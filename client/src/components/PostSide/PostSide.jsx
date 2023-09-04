import React from "react";
import PostShare from "../PostShare/PostShare.jsx";
import Posts from "../Posts/Posts.jsx";
const PostSide = ({location}) => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts location={location}/>
    </div>
  );
};

export default PostSide;
