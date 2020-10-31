const path = require("path");
const router = require("express").Router();
const somethingRoutes = require("./something");

// Soemthing routes
router.use("/something", somethingRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
