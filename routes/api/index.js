const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");

// Books routes match /api/books
router.use("/uers", usersRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;