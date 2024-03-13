const express = require('express');
const {getHomepage, getABC, getTest} = require('../controllers/homeController');
const router = express.Router();

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/test", getTest);

module.exports = router; // export default
