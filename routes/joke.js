const express = require("express");
const router = express.Router();

const controller = require("../controllers/joke.js");

router.post("/", controller.create);
router.post("/import", controller.importCSV);
router.get("/:id", controller.getById);
router.get("/all", controller.getAll);
router.get("/", controller.getOne);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
router.use("/", controller.default);

module.exports = router;
