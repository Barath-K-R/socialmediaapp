import React from 'react'
import "./Home.css";
import ProfileSide from "../components/profileSide/ProfileSide";
import PostSide from "../components/PostSide/PostSide.jsx";
import RightSide from "../components/RightSide/RightSide.jsx";
const Home = () => {
  return (
    <div className='Home'>
    <ProfileSide/>
    <PostSide location = 'homepage'/>
    <RightSide />
    </div>
  )
}

export default Home;