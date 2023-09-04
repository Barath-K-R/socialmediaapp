import React, { useState } from "react";
import { useEffect } from "react";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequests.js";
import { getUser } from "../../api/UserRequests.js";
import "./Post.css";

const Post = ({ postDetails }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(postDetails.likes.includes(user._id));
  const [likes, setLikes] = useState(postDetails.likes.length);
  const [postUserData, setpostsetUserData] = useState();


  const handleLike = () => {
    likePost(postDetails._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(postDetails.userId);
        setpostsetUserData(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="Post">
      <div className="postdetails">
        <img
          src={postUserData?.profilePicture? serverPublic + postUserData.profilePicture : serverPublic + "defaultProfile.png"}
          alt="Profile"
        />
        <span >{postUserData?.firstname} {postUserData?.lastname}</span>
      </div>
      <img
        src={postDetails.image ? serverPublic + postDetails.image : ""}
        alt=""
      />
      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {" "}
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{postDetails.name} </b>
        </span>
        <span> {postDetails.desc}</span>
      </div>
    </div>
  );
};

export default Post;
