const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        //  useCreateIndex:false
    
    
    }).then((data)=>{
         console.log(`mongodb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
           console.log(err);
    })
};

module.exports = connectDatabase;