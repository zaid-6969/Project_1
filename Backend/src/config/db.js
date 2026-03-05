const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("connect to the data base");
  } catch (err) {
    console.log(erro);
  }
}


module.exports= connectToDB