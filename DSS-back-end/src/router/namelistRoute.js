const express = require("express")
const { createNamelist, getallData, query , getRandomData , category , findshort , findrate } = require("../controller/namelistController")
const router = express.Router();


router.get('/getData/',getallData)
router.get('/getrandomdata/',getRandomData)
router.get('/getid/:ID',query)
router.get('/getcategory/:category/',category)
router.get('/findshort/:category?/:pricerate?/',findshort)
router.get('/findrate/:pricerate?/',findrate)

router.post('/create/Namelist', createNamelist)
module.exports = router; 
