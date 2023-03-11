const express = require('express');
const { getAllWashers, updateWasherStatus, searchDorms, getAllWashersInAllDorms } = require('../controllers/washerController');
const router = express.Router()

router.route("/id/:id").get(getAllWashers)
router.route("/search/").get(searchDorms)
router.route("/id/:id").put(updateWasherStatus);
router.route("/getall").get(getAllWashersInAllDorms);

module.exports = router;