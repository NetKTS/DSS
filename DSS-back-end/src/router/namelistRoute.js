const express = require("express")
const { createNamelist, getallData, query , getRandomData } = require("../controller/namelistController")
const router = express.Router();


router.get('/getData/',getallData)
router.get('/getrandomdata/',getRandomData)
router.get('/getid/:ID',query)
router.post('/create/Namelist', createNamelist)
module.exports = router;
