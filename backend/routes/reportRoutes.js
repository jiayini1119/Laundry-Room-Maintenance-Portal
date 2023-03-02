const express = require('express');
const { getAllReports, createReport } = require('../controllers/reportControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router()

router.route("/").get(protect, getAllReports);
router.route("/").post(protect, createReport);

module.exports = router;