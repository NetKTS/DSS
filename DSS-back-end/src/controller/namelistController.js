const Namelist = require("../model/namelistModel");

// exports.createNamelist = (req, res) => {
//     const { payload } = req.body;
//     const add = new Namelist({
//         name: payload.name,
//         category: payload.category,
//         pricerate: payload.pricerate,
//         date: {
//                 monday: payload.date.monday,
//                 tuesday: payload.date.tuesday,
//                 wednesday: payload.date.wednesday,
//                 thursday: payload.date.thursday,
//                 friday: payload.date.friday,
//                 saturday: payload.date.saturday,
//                 sunday: payload.date.sunday,
//             }
//         ,
//         service: payload.service,
//         tel: payload.tel,
//         location: payload.location,
//         map: {
//                 lat: payload.map.lat,
//                 long: payload.map.long
//             }
//     });
//     add.save((error, data) => {
//         if(error) return res.status(400).json({ error });
//         if(data) {
//             return res.status(200).json({ data });
//         }
//     });
// }

exports.createNamelist = (req, res) => {
    const { payload } = req.body;
    console.log(req.body);
    const add = new Namelist(req.body.payload)
    
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

exports.getRandomData = (req, res) => {
    myran = Math.random() * 338
    Namelist.find({}).skip(myran).limit(9).exec((error, data) => {
        if(error) return res.status(400).json({ error });
        if(data) {
            return res.status(200).json({ data });
        }
    });
}
// ------


exports.getDataID = (req, res) => {
    console.log(req.body);
    Namelist.find({}).exec((error, data) => {
        if(error) return res.status(400).json({ error });
        if(data) {
            return res.status(200).json({ data });
        }
    });
}
exports.getByID = (req, res) => {
    Namelist.findById(req.params.id).then((result) => {
        res.status(200).send(result);
    })
}

exports.findById = (id) => {
    return Namelist.findById(id).then((result => {
        result = result.toJSON();
        return result;
    }))
}
exports.query = (req, res) => {
    // const { payload } = req.params.ID;
    // Namelist.find({ name: req.params.ID }).exec((error, data) => {
    //   if (error) return res.status(400).json({ error });
    //   if (data) {
    //     return res.status(200).json({ data });
    //   }
    // });

    const { payload } = req.params.ID;
    Namelist.find({ 'name':{'$regex' : req.params.ID,'$options':'i'}}).exec((error, data) => {
      if (error) return res.status(400).json({ error });
      if (data) {
        return res.status(200).json({ data });
      }
    });



  };
  
exports.category = (req, res) => {
    const payload  = req.params.category;
    Namelist.find({ 'category':{'$regex' : payload ,'$options':'i'}}).exec((error, data) => {
      if (error) return res.status(400).json({ error });
      if (data) {
        return res.status(200).json({ data });
      }
    });



  };
exports.findshort = (req,res) => {
    const category  = req.params.category;
    const pricerate = req.params.pricerate
    Namelist.find({ 'category':{'$regex' : category ,'$options':'i'},'pricerate':{'$regex' : pricerate ,'$options':'i'}}).exec((error, data) => {
      if (error) return res.status(400).json({ error });
      if (data) {
        return res.status(200).json({ data });
      }
    });
}
exports.findrate = (req,res) => {
    const pricerate = req.params.pricerate
    Namelist.find({ 'pricerate':{'$regex' : pricerate ,'$options':'i'}}).exec((error, data) => {
      if (error) return res.status(400).json({ error });
      if (data) {
        return res.status(200).json({ data });
      }
    });
}