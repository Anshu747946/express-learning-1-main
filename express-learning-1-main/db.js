const mongoose = require("mongoose");

function connectDb(){
    mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error(err));
}
module.exports = connectDb;


    // console.log(mongoose.connection.db.databaseName);
    // console.log(mongoose.connection.db.collectionNames());
