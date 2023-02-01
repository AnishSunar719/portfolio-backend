import express from "express";
import dotenv from "dotenv";
import { saveMessage, readMessage } from "./controllers/message.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*",
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post("/contact", saveMessage);
app.get("/message", readMessage);

mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.DB_URL)
    .then(
        app.listen(process.env.PORT, () => {
            console.log(`Server running at ${process.env.PORT}`);
        })
    )
    .catch((error) => console.log(`Error ${error}`));