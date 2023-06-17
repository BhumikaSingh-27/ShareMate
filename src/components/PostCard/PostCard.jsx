import React, { useContext, useState } from "react";
import "./PostCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { DataContext } from "../../contexts/DataContext";
import { useEffect } from "react";
import axios from "axios";

const PostCard = ({ data }) => {
  const { state, likePost, bookMarkPost } = useContext(DataContext);
  const [userData, setUserData] = useState([]); //to show the user details in individual post in landing page

  //get like count of a post
  const likedCount = state.posts.find(({ _id }) => _id === data._id).likes
    .likeCount;

  //check if post is already liked and preent in likedPosts Array
  const postLiked = state?.likedPosts?.find((id) => id === data._id);

  //check if post is already bookmarked
  const postBookmarked = state?.bookmarkedPosts?.find((id) => id === data._id);

  //get user profile pic
  useEffect(() => {
    (async () => {
      try {
        const user = state?.users?.find(
          (usr) => usr.username === data.username
        );
        const response = await axios.get(`/api/users/${user._id}`);
        console.log("post", response);
        setUserData(response.data.user);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  //get the date in format
  const d = new Date(data.createdAt);

  return (
    <div>
      <div className="post-container">
        <div className="post-title">
          <img src={userData.avatarUrl} alt="" className="nav-profile-pic" />

          <div>
            <p>
              <b>{data?.username}</b> {d.toDateString()}
            </p>
            <p>@{data?.username}</p>
          </div>
          <div id="three-dots">
            <MoreVertIcon />{" "}
          </div>
        </div>
        <div className="post-content">
          {data?.content}
          {data?.image && <img className="post-img" src={data?.image} alt="" />}
        </div>

        <hr />
        <div className="post-actions">
          <div
            className="post-icons"
            onClick={() => {
              likePost(data._id, postLiked);
            }}
          >
            <div className="liked-counter-div">
              {" "}
              {postLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              {likedCount}
            </div>
          </div>
          <div className="post-icons">
            <ChatBubbleOutlineIcon />
          </div>
          <div
            className="post-icons"
            onClick={() => {
              bookMarkPost(data._id, postBookmarked);
            }}
          >
            {postBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </div>
          <div className="post-icons">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
