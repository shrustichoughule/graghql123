const { connect } = require('mongoose')

const URI = "mongodb+srv://shrusti:r23o2yBSCZJ6tXtq@cluster0.kd0at.mongodb.net/db?retryWrites=true&w=majority";

connect(URI)
    .then(conn => console.log("MongoDB Connected...."))
    .catch(console.log)