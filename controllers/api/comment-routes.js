const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({});
    if (commentData.length === 0) {
      res.status(404).json({ message: "No comments found. Please try again." });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    console.log("this is an issue getting all comments");
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("this is an issue getting a comment after the TRY");
    const commentData = await Comment.findAll({
      where: { id: req.params.id },
    });
    console.log(
      "this is an issue getting a comment after the TRY before the IF"
    );
    if (commentData.length === 0) {
      res
        .status(404)
        .json({ message: "No comments found with this ID. Please try again." });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    console.log("this is an issue getting a single comment");
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  if (req.session) {
    try {
      const newComment = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedComment) {
      res
        .status(404)
        .json({ message: "No comment found with this ID. Please try again." });
      return;
    }
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res
        .status(404)
        .json({ message: "No comment found with this ID. Please try again." });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
