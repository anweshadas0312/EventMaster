import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "EVENT_PLANNING" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(
        "some error has been occured while connecting to database: ",
        err
      );
    });
};
