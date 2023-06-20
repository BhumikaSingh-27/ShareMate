import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import toastNotify from "../utils/toastNotify";

export const AsideDataContext = createContext();

export const AsideDataContextProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState("");
  const [editPost, setEditPost] = useState(false); //to open the dropdow for edit option

  const { encodedToken, dispatch, setCreatePost } = useContext(DataContext);

  const deletePost = async (postId) => {
    console.log(encodedToken);
    try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: "DELETE",
          headers: {
            authorization: encodedToken,
          },
        });
    //   const response = await axios.delete(
    //     `/api/posts/${postId}`,
    //     {},
    //     {
    //       headers: {
    //         authorization: encodedToken,
    //       },
    //     }
    //   );
      const data = await response.json();
      console.log(data);
      dispatch({ type: "GET_POSTS", payload: data.posts });
      toastNotify("success", "Post Deleted successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  const getPostData = async (id) => {
    try {
      const { data } = await axios.get(`/api/posts/${id}`);
      //   setCreatePost({ text: data.post.content, media: data.post.image });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const followUser = async (Id) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${Id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AsideDataContext.Provider
      value={{
        searchUser,
        setSearchUser,
        editPost,
        getPostData,
        setEditPost,
        deletePost,
        followUser,
      }}
    >
      {children}
    </AsideDataContext.Provider>
  );
};
