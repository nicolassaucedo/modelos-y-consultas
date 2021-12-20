const express = require("express");
const router = express.Router();

const actorsController = require("../controllers/actorsController");

router.get("/actors", actorsController.list);
router.get('/actors/actor/:id/detail', actorsController.detail);

module.exports = router;
