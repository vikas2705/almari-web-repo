import express from "express";
import path from "path";
import indexRouter from "./src/routes/index.route.js";
import userRouter from "./src/routes/user.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

// Setting up index router
app.use(indexRouter);

// Setting up user router
app.use(userRouter);

// Setting up static files
app.use(express.static(path.resolve("src", "public")));

// Setting up ejs view engine
app.set("view engine", "ejs");

// Setting up ejs view path
app.set("views", path.resolve("src", "views"));

export default app;
