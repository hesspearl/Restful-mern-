import {
  CREATE,
  DELETE,
  FETCH_ALL,
  UPDATE,
  LIKE
} from "../action/posts"

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case LIKE:
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
  }

  return posts;
};
