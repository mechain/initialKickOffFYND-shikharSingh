const mongoose = require("mongoose");
4
4

const connect = () => {
    mongoose.connect(process.env.MONGO_DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    const connection = mongoose.connection
    connection.once("open",()=> console.log("Database connection established successfully"))
    connection.on("error",(err) => {
        console.log("Database connection error :"+err)
        process.exit()
    })
}


module.exports = connect;