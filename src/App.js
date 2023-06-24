import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserList from "./components/UserList/UserList";
import PostCard from "./components/PostCard/PostCard";
import Profile from "./components/Profile/Profile";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";

import SignUp from "./pages/Signup/SignUp";
import Landing from "./pages/LandingPage/Landing";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import LikePage from "./pages/LikePage/LikePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import Modal from "./components/Modal/Modal";
import axios from "axios";
import { AsideDataContext } from "./contexts/AsideDataContext";
import ProfileModal from "./components/Modal/ProfileModal";

function App() {
  const {
    setEncodedToken,
    getUserLoggedInData,
    state,
    dispatch,
    openModal,
    setOpenModal,
    userLoggedIn,
  } = useContext(DataContext);

  const { editPost, setEditPost, editProfile, setEditProfile } =
    useContext(AsideDataContext);

  useEffect(() => {
    const encodedToken = localStorage.getItem("token");
    setEncodedToken(encodedToken ?? "");
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/users");
        dispatch({ type: "GET_USERS", payload: response.data.users });
        // getUserLoggedInData();
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    getUserLoggedInData();
  }, [userLoggedIn]);

  console.log("inside app", state);

  return (
    <div className="App">
      {editPost && <Modal open={setEditPost} />}
      {openModal && <Modal open={setOpenModal} />}
      {editProfile && <ProfileModal open={setEditProfile} />}

      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
        <Route path="/likepage" element={<LikePage />}></Route>
        <Route path="/profilepage/:username" element={<ProfilePage />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
