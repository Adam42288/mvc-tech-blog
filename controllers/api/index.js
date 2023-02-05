const router = require("express").Router();
const userroutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userroutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
