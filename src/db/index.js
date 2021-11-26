//Imports
const mongoose = require('mongoose');


//Function
async function connectDB() {
      await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
      })
      console.log('Connected to Database')
}


//Export
module.exports = connectDB