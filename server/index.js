import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/blogRoutes.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL || 8000;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB CONNECTED BAZA");
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR" + err);
  });

app.use("/api", route);
