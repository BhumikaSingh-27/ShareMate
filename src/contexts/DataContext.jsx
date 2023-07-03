import { createContext, useReducer } from "react";
import { initialValue, reducerFun } from "../reducers/dataReducer";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import toastNotify from "../utils/toastNotify";
import { useEffect } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const localData = localStorage.getItem("token");
  console.log(localData, "local");
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  const [loading, setLoading] = useState(false);
  const [encodedToken, setEncodedToken] = useState(localData); //gloabally access the local storage token
  const [userLoggedIn, setUserLoggedIn] = useState(""); //gloabally access the local storage token
  const [userPost, setUserPost] = useState([]);
  const [userLoginData, setUserLoginData] = useState({});
  const [openModal, setOpenModal] = useState(false); //create post modal
  const [createPost, setCreatePost] = useState({ text: "", media: "" }); //to create ans post the data
  const editPostId = useRef("");

  console.log("context refresh", encodedToken);

  const likePost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "GET_POSTS", payload: response.data.posts });//render all post
        dispatch({ type: "LIKED_POST", payload: postId });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
        dispatch({ type: "DISLIKE_POST", payload: postId });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const bookMarkPost = async (postId, value) => {
    if (!value) {
      try {
        const response = await axios.post(
          `/api/users/bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await axios.post(
          `/api/users/remove-bookmark/${postId}`,
          {},
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );
        dispatch({ type: "BOOKMARK_POST", payload: response.data.bookmarks });
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const createPostHandler = async (postData) => {
    if (postData.text || postData.media) {
      const findPost = state?.posts?.find(
        ({ _id }) => _id === editPostId.current
      );
      // console.log("edit", findPost);
      if (findPost) {
        try {
          const response = await axios.post(
            `/api/posts/edit/${editPostId.current}`,
            {
              postData: { content: postData.text, image: postData.media },
            },
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          //update the posts with the edited content
          dispatch({ type: "GET_POSTS", payload: response.data.posts });
          toastNotify("success", "Updated successfully!");
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.post(
            "/api/posts",
            {
              postData: {
                content: postData.text,
                image: postData.media,
              },
            }, //{..post} and {post}
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          console.log("new post", response);
          dispatch({ type: "GET_POSTS", payload: response.data.posts });
          toastNotify("success", "Posted successfully!");
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      toastNotify("error", "Add content to post");
    }
  };

  const setFilter = (value) => {
    dispatch({ type: "SET_FILTER", payload: value });
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/users");
  //       dispatch({ type: "GET_USERS", payload: response.data.users });
  //       // console.log("users in context", response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        likePost,
        bookMarkPost,
        userPost,
        setUserPost,
        userLoginData,
        setUserLoginData,
        createPostHandler,
        setFilter,
        openModal,
        setOpenModal,
        encodedToken,
        setEncodedToken,
        createPost,
        setCreatePost,
        editPostId,
        userLoggedIn,
        setUserLoggedIn,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
