const express = require("express");
const router = express.Router();


const {
    
    cadasVisitante
} = require("../controllers/visitantesController");

router.post("/", cadasVisitante);


module.exports = router;