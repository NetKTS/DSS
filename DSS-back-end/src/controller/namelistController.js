const Namelist = require("../model/namelistModel");

exports.createNamelist = (req, res) => {
    const { payload } = req.body;
    const add = new Namelist({
        name: payload.name,
        category: payload.category,
        pricerate: payload.pricerate,
        date: {
                monday: payload.date.monday,
                tuesday: payload.date.tuesday,
                wednesday: payload.date.wednesday,
                thursday: payload.date.thursday,
                friday: payload.date.friday,
                saturday: payload.date.saturday,
                sunday: payload.date.sunday,
            }
        ,
        service: payload.service,
        tel: payload.tel,
        location: payload.location,
        map: {
                lat: payload.map.lat,
                long: payload.map.long
            }
    });
    add.save((error, data) => {
        if(error) return res.status(400).json({ error });
        if(data) {
            return res.status(200).json({ data });
        }
    });
}

exports.getallData = (req, res) => {
    Namelist.find({}).exec((error, data) => {
        if(error) return res.status(400).json({ error });
        if(data) {
            return res.status(200).json({ data });
        }
    });
}