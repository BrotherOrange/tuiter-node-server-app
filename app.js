import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

mongoose.connect('mongodb+srv://root:zjh991600@tuiter.gaacavk.mongodb.net/tuiter?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());

TuitsController(app);
HelloController(app);
UserController(app);

app.listen(process.env.PORT || 4000);
