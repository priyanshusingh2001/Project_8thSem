const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/studentData").then(() => {
    console.log("connection successful")
}).catch((e) => {
    console.log("no connection", e)
});

// mongoose.connect("mongodb://localhost:27017/studentData", (err) => {
//     if (err) {
//         console.log("Not Connected");
//     }
//     else {
//         console.log("Connected");
//     }
// })