const mongoose = require("mongoose");
const User = require("./User");

const postSchema = new mongoose.Schema({

    caption: String,

    image:{
        public_id: String,
        url: String,
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

    like:[{
        
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    
    ],


    comment:[{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comment:{
            type:String,
            required: true,
        }
    }
    ],


});


module.exports = mongoose.model("post", postSchema);