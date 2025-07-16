// const mongoose = require("mongoose");

// function connectDb(){
//     mongoose
//     .connect("mongodb://localhost:27017", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         })
//         .then(() => console.log("Connected to MongoDB"))
//         .catch(err => console.error(err));
// }
// module.exports = connectDb;

// const mongoose = require("mongoose");

const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
module.exports = connectDb;

    // console.log(mongoose.connection.db.databaseName);
    // console.log(mongoose.connection.db.collectionNames());
