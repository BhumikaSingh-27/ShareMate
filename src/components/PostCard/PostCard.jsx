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
import OutsideClickHandler from "react-outside-click-handler";
import { AsideDataContext } from "../../contexts/AsideDataContext";
import Modal from "../../components/Modal/Modal";

const PostCard = ({ data }) => {
  const { state, likePost, bookMarkPost, userLoggedIn } =
    useContext(DataContext);
  const { deletePost, setEditPost, getPostData } = useContext(AsideDataContext);
  const [userData, setUserData] = useState([]); //to show the user details in individual post in landing page
  const [modifyPost, setModifyPost] = useState(false); //to open the dropdow for edit option

  //get like count of a post
  const likedCount = state.posts.find(({ _id }) => _id === data._id)?.likes
    ?.likeCount;

  //check if post is already liked and preent in likedPosts Array
  const postLiked = state?.likedPosts?.find((id) => id === data._id);

  //check if post is already bookmarked
  const postBookmarked = state?.bookmarkedPosts?.find((id) => id === data._id);

  //get user profile pic
  const picOfUser = state?.users?.find(
    (user) => user.username === userLoggedIn
  );
  console.log("pc", picOfUser);

  useEffect(() => {
    const user = state?.users?.find((usr) => usr.username === data.username);
    (async () => {
      try {
        const response = await axios.get(`/api/users/${user._id}`);
        console.log("post", response);
        setUserData(response.data.user);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [state.users]);

  //get the date in format
  const d = new Date(data.createdAt);
  console.log("photo", userData);
  return (
    <div>
      <div className="post-container">
        <div className="post-title">
          <img src={userData?.avatarUrl} alt="" className="nav-profile-pic" />

          <div className="post-date">
            <p>
              <b>
                {userData?.firstName} {userData?.lastName}
              </b>{" "}
              {d.toDateString()}
            </p>
            <p>@{data?.username}</p>
          </div>
          <div className="three-dots-container">
            <div id="three-dots" onClick={() => setModifyPost(!modifyPost)}>
              {data.username === userLoggedIn && <MoreVertIcon />}{" "}
            </div>
            {modifyPost && (
              <div className="post-popup">
                <OutsideClickHandler
                  onOutsideClick={() => setModifyPost(false)}
                >
                  <div
                    className="hover"
                    onClick={() => {
                      setEditPost(true);
                      getPostData(data._id);
                    }}
                  >
                    Edit
                  </div>
                  <div className="hover" onClick={() => deletePost(data._id)}>
                    Delete
                  </div>
                </OutsideClickHandler>
              </div>
            )}
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
