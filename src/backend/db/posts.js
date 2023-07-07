import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Your time is limited, so don't waste it living someone else's life.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "adarshbalika",
    createdAt: "02 Nov, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Some rules are nothing but old habits that people are afraid to change.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Jane12",
    createdAt: "17 March,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life presents us with beautiful moments. But it also brings its fair share of challenges. We all encounter hardships that test our resilience. It may be personal setbacks, professional roadblocks, or unexpected twists.",
    image: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "bhumika27",
    createdAt: "11 Jan, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "It's my birthday today!",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1684393728/NegProjects/E-commerce/Orchids/or9_a9gsdi.avif",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Jane12",
    createdAt: "27 July, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hi everyone, I learnt today about HTTP request and response",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688030260/NegProjects/SocialMedia/download_qc5xqt.png",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Chavez24",
    createdAt: "21 Jan, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Shopping is what I love the most!",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688030773/NegProjects/SocialMedia/photo-1483985988355-763728e1935b_ep6fvd.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Lane34",
    createdAt: "19 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Life should be as colorful as shown in this picture! xD",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688030773/NegProjects/SocialMedia/photo-1601924994987-69e26d50dc26_ustls5.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Johnjoe",
    createdAt: "11 Jan, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Treat yourself well, make a healthy snack or drink and enjoy it slowly. Take pleasure in nurturing yourself !",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Lane34",
    createdAt: "19 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hurry, the shop is open now!",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688030773/NegProjects/SocialMedia/photo-1472851294608-062f824d29cc_jtoge2.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Johnjoe",
    createdAt: "22 May, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "The road not taken!",
    image:
      " https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031973/NegProjects/SocialMedia/road_-_Copy_hdgqov.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "bhumika27",
    createdAt: "26 November, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Just vibing alone!",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031972/NegProjects/SocialMedia/profile_-_Copy_zrjacd.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Jane12",
    createdAt: "23 Jan, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Brought this amazing shoes today",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688055748/NegProjects/SocialMedia/photo-1595341888016-a392ef81b7de_m3utwv.avif",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Chavez24",
    createdAt: "25 May, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    image: "",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Chavez24",
    createdAt: "29 June, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Working from Home!",
    image:
      " https://res.cloudinary.com/dgoldjr3g/image/upload/v1688031973/NegProjects/SocialMedia/wfh_ltmdht.avif",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Johnjoe",
    createdAt: "19 April, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Minion loves banana!, what do you love?",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688034579/NegProjects/SocialMedia/minion_hcx9lh.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Lane34",
    createdAt: "11 June, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Work Hard and Dream Big..",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688055748/NegProjects/SocialMedia/coding_lgrgay.avif",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "Chavez24",
    createdAt: "11 June, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Confidence is something you create when you believe in yourself.",
    image: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment: ["awesome"],
    username: "bhumika27",
    createdAt: "01 July, 2023",
    updatedAt: formatDate(),
  },
];
