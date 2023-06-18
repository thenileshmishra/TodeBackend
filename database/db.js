import mongoose from "mongoose";

const Connection = () => {
  const url =
    "mongodb+srv://admin:YBchOHoDYlSQQhGO@mern-todo.84jgsbn.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(url, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database Connected Successfully ohhoooo!!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error --->", error);
  });
};

export default Connection;

// YBchOHoDYlSQQhGO
