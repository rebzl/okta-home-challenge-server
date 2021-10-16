const express = require("express");
const { oktaAuthRequired } = require("../lib/oktaAuthRequired");

const router = express.Router();

// Method to creare de category
const { create, list } = require("../controllers/task");

router.post("/create", oktaAuthRequired, create);
router.get("/tasks", oktaAuthRequired, list);

module.exports = router;
