const express = require("express")
const { createNamelist, getallData, query } = require("../controller/namelistController")
const router = express.Router();


router.get('/getData/',getallData)
router.get('/getData/:ID',query)
router.post('/create/Namelist', createNamelist)
module.exports = router;
