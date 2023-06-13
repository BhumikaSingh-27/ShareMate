import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-main">
      <div className="profile-container">
        <img
          className="profile-image"
          src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393956/NegProjects/E-commerce/Orchids/orch_fwftgt.avif"
          alt=""
        />
        <div className="username">Bhumika Singh</div>
        <span className="user-id">@username</span>
        <button className="profile-edit-btn">Edit Profile</button>

        <div className="profile-bio">
          Bio-Senior Software Engineer @Microsoft | Creator of India’s biggest
          programming community | Tweets about JavaScript, ReactJS, Career and
          Startups
        </div>
        <div>
          <a href="/">a link</a>
        </div>

        <div className="follow-details">
          <div> {6} Follower</div>
          <div> {5} Post</div>
          <div>{4} following</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
