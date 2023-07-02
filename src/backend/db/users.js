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
  {
    _id: uuid(),
    firstname: "John",
    lastname: "Joe",
    username: "Johnjoe",
    password: "Joe1234",
    bio: "Margeting and Sales Enginneer",
    website: "https://margeting/sales/name.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/62_qogeol.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Stacy",
    lastname: "Lane",
    username: "Lane34",
    password: "abbc1234",
    bio: "Operation Engineer",
    website: "https://google/pic/name.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/10_yrt7lk.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Mario",
    lastname: "Chavez",
    username: "Chavez24",
    password: "Chavez12",
    bio: "Let's get to work",
    website: "https://google/pic/name.com",
    avatarUrl:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/11_zmzmjz.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
