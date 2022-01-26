import mongoose from "mongoose";
const {
  DB_STRING = "mongodb+srv://dev:passmein@cluster0.gsr2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
} = process.env;

async function mongoConnect() {
  return await mongoose
    .connect(DB_STRING)
    .then(() => {
      console.log(`connected to mongodb database`);
      return [true, `connected to mongodb database`];
    })
    .catch((e) => {
      return [false, e];
    });
}

export { mongoConnect };
