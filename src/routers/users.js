const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/:userId/transactions", function (req, res) {
  console.log(req.params.userId);
  res.json({ success: true });
});

module.exports = usersRouter;
