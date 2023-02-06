const { Post } = require("../models");

const postData = [
  {
    title: "My first post",
    content: "This is my first post",
    user_id: 1,
  },
  {
    title: "My second post",
    content: "This is my second post",
    user_id: 2,
  },
  {
    title: "My third post",
    content: "This is my third post",
    user_id: 3,
  },
  {
    title: "My fourth post",
    content: "This is my fourth post",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
