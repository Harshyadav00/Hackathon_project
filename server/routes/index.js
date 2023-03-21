const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/").get(controllers.getAllEntries).post(controllers.createEntries);
router
 .route("/:id")
 .get(controllers.getEntries);
//  .put(controllers.updateTodo)
//  .delete(controllers.deleteTodo);
module.exports = router;