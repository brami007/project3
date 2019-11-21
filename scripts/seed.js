const mongoose = require("mongoose");
const User = require("../models/users");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/realestate",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    family: 4 // Use IPv4, skip trying IPv6
  }
);

const userSeed = [
  {
    user: "RickyMartin",
    password: "1234",
   
  }
];

async function seed() {
  await mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/realestate",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      family: 4 // Use IPv4, skip trying IPv6
    }
  )
    .then(() => {
      console.log("Seed: Connected to Database");
    })
    .catch(err => {
      console.log("Seed: Not Connected to Database ERROR! ", err);
    });
  for (let user of userSeed) {
    const { _id: userId } = await new User({
      user: user.user,
      password: user.password,
    }).save();
  }

  mongoose.disconnect();

  console.info("Seed: Done!");
}

seed();