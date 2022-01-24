import mongoose from "mongoose";
const { DB_STRING } = process.env;

const db = async () => {
  await mongoose.connect(DB_STRING).then(() => {
    console.log(`connected to mongodb database`);
  });
};

export default db;
