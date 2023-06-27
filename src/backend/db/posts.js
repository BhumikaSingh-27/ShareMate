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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "02 Nov, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
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
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
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
    username: "Jane12",
    createdAt: "27 July, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life presents us with beautiful moments. But it also brings its fair share of challenges. We all encounter hardships that test our resilience. It may be personal setbacks, professional roadblocks, or unexpected twists.",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhumika27",
    createdAt: "11 Jan, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life presents us with beautiful moments. But it also brings its fair share of challenges. We all encounter hardships that test our resilience. It may be personal setbacks, professional roadblocks, or unexpected twists.",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhumika27",
    createdAt: "11 Jan, 2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Life presents",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhumika27",
    createdAt: "11 Jan, 2021",
    updatedAt: formatDate(),
  },
];
