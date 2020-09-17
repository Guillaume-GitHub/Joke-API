const express = require("express");
const router = express.Router();

const controller = require("../controllers/example.js");

router.post("/", controller.create);
router.get("/:id", controller.getOne);
router.get("/", controller.getAll);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
