const express = require("express");
const router = express.Router();

const {
    registarInteresse
} = require("../controllers/interesseController");


router.post("/", registarInteresse);

module.exports = router;