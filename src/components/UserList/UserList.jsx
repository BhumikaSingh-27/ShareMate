import React from "react";
import "./UserList.css";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import { useContext } from "react";

const UserList = ({ user }) => {
  const {followUser} = useContext(AsideDataContext)
  
  return (
    <div>
      <div>
        <div className="userlist">
          <img src={user.avatarUrl} alt="" className="nav-profile-pic" />
          <div className="user-detail">
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <span>@{user.username}</span>
          </div>
          <button className="follow-btn" onClick={()=>followUser(user._id)}>+ Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
