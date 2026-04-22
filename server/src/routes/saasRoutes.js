const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

// PDF Generation
router.post('/generate-pdf', pdfController.generateResumePDF);

module.exports = router;
