const { Double } = require("bson");
const mongoose = require("mongoose");

const namelistSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
        },
        category:{
            type: Array,
            required:true
        },
        pricerate:{
            type: String,
            required:true
        },
        date:[
            {
                monday:{
                    type: String,
                    required:true
                },
                tuesday:{
                    type: String,
                    required:true
                },
                wednesday:{
                    type: String,
                    required:true                    
                },
                thursday:{
                    type: String,
                    required:true                    
                },
                friday:{
                    type: String,
                    required:true                    
                },
                saturday:{
                    type: String,
                    required:true                    
                },
                sunday:{
                    type: String,
                    required:true                    
                },
            }
        ],
        service:{
            type: Array,
            required:true
        },
        tel:{
            type: Array,
            required:true
        },
        location:{
            type:String,
            required:true

        },
        map:[
            {
                lat:{
                    type:String,
                    required:true
                },
                long:{
                    type:String,
                    required:true
                }
            }
        ]

    }
)
const usernameSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("namelist",namelistSchema);