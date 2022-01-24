import mongoose from "mongoose";
const {
  DB_STRING = "mongodb+srv://dev:passmein@cluster0.gsr2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
} = process.env;

const db = async () => {
  await mongoose.connect(DB_STRING).then(() => {
    console.log(`connected to mongodb database`);
  });
};

export default db;
