import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);

const port = 8000;

Connection();
app.listen(port, () => {
  console.log(`your server is running at index ${port}`);
});
