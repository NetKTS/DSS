const express = require("express")
const { createNamelist, getallData } = require("../controller/namelistController")
const router = express.Router();


router.get('/getData/',getallData)
router.post('/create/Namelist', createNamelist)
module.exports = router;
