const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const namelistRoutes = require("./src/router/namelistRoute")
const cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
    let ALLOW_ORIGIN = ['domain-a.com', 'domain-b.com', 'domain-c.com']
    let ORIGIN = req.headers.origin
       if (ALLOW_ORIGIN.includes(ORIGIN)) {
         res.header('Access-Control-Allow-Origin', ORIGIN)
       }
       res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
       res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
       return next()
    })


const Namelist = [
    {
        id: '1001',
        name: 'ร้านลุงอ้วน',
        category: 'อาหารตามสั่ง',
        pricerate: 'ต่ำกว่า 100',
        monday: '08:00-20:00',
        tuesday: '08:00-20:00',
        wednesday: '08:00-20:00',
        thursday: '08:00-20:00',
        friday: '08:00-20:00',
        saturday: '08:00-18:00',
        sunday: '08:00-18:00',
        service: ["สั่งกลับบ้าน","นั่งรับประทานที่ร้าน"],
        tel: '0613894556',
        location: 'ตำบล เนินหอม อำเภอเมืองปราจีนบุรี ปราจีนบุรี 25230',
        map: '14.162816283394443, 101.36525672289856 '
    },
   
]

//environtment variable or you can say constants
env.config();

mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xpyz9.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("connect db")
    })
var db = mongoose.connection
var Schema = mongoose.Schema
app.use(express.json())
app.use("/api",namelistRoutes)

app.get('/hello/:message?',(req, res) => {
    const { params } = req
    res.json({ message : 'Hello', params })
})
app.get('/restname',(req, res) => {
    res.json(Schema)
})

app.get('/restname/:id',(req, res) => {
    namelistRoutes.getById
})


/*app.get('/restname/:name',(req, res) => {
    const { name } = req.params
    const result = Namelist.find(payload => payload.name === name)
    res.json(result)
})*/

app.post('/restname',(req, res) => {
    const payload = req.body
    res.json(payload)
})

app.put('/restname/:id',(req, res) => {
    const { id } = req.params
    res.json({ id })
})

app.delete('/restname/:id',(req, res) => {
    const { id } = res.params
    res.json({ id })
})




app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
});