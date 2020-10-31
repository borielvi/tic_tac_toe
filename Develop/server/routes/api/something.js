const router = require("express").Router();
const somethingController = require("../../controllers/somethingController");

// Matches with "/api/something"
// This route will Find All
router.route("/")
  .get(somethingController.findAll)
  .post(somethingController.create);

// Matches with "/api/something/:id"
// This route will Find by Id
router
  .route("/:id")
  .get(somethingController.findById)
  .put(somethingController.update)
  .delete(somethingController.remove);

module.exports = router;
