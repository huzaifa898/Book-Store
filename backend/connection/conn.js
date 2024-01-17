const mongoose = require("mongoose");
mongoose.connect
("mongodb+srv://huzaifa:ghani321@cluster0.z9u4i.mongodb.net/app?retryWrites=true&w=majority").then(() => console.log("Connected"));