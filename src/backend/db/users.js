import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "I'm adarsh balika!",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804932/NegProjects/SocialMedia/76_zofevc.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstname: "Bhumika",
    lastname: "Singh",
    username: "bhumika27",
    password: "bhumi27",
    bio: "Be the person you are trying to find!",
    website: "https://bhumikawebsite.netlify.app/",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804941/NegProjects/SocialMedia/311639512_576717774259599_8692789323497610209_n_kj0bmr.jpg",

    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Jane",
    lastname: "Phillips",
    username: "Jane12",
    password: "JP",
    bio: "Software Enginneer",
    website: "https://google.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
