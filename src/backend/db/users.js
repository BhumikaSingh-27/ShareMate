import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "I'm adarsh balika!",
    avatarUrl: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
 
  {
    _id: uuid(),
    firstName: "Bhumika",
    lastName: "Singh",
    username: "bhumika27",
    password: "bhumi27",
    bio: "Be the person you are trying to find!",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804941/NegProjects/SocialMedia/311639512_576717774259599_8692789323497610209_n_kj0bmr.jpg",
    website: "https://bhumikawebsite.netlify.app/",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Phillips",
    username: "Jane12",
    password: "JP",
    bio: "Software Enginneer",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
