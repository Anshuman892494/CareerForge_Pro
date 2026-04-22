const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/analyze-jd', aiController.analyzeJD);
router.post('/rewrite-bullet', aiController.rewriteBullet);
router.post('/calculate-score', aiController.calculateScore);
router.post('/generate-cover-letter', aiController.generateCoverLetter);

module.exports = router;
