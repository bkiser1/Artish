const path = require("path");
const express = require("express");
const connectDb = require("./config/db");

const app = express();

//call db
connectDb();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

///public Route Defined
const publicRoute = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/template/views");

app.set("views engine", "hbs");

app.get("/", (req, res) => {
	res.render(index);
});

//static pages
app.use(express.static(publicRoute));

app.get("/", (req, res) => {
	res.render("index");
});
