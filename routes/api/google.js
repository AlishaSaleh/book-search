const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// --- /api/google
console.log("REACHED GOOGLE ROUTE");
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
