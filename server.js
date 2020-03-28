const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds149124.mlab.com:49124/heroku_g4gbr9xn", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "index.html"));
})

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

app.post("/api/workouts");

app.put("/api/workouts:id");

app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});