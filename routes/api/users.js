const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .post(usersController.create);



module.exports = router