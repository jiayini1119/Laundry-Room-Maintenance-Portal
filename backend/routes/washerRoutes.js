const express = require('express');
const { getAllWashers, updateWasherStatus, searchDorms } = require('../controllers/washerController');
const router = express.Router()

router.route("/:id").get(getAllWashers)
router.route("/").get(searchDorms)
router.route("/:id").put(updateWasherStatus);

module.exports = router;