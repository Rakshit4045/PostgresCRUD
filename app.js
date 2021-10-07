const express = require('express');
const bodyParser = require('body-parser');
var Sequelize = require("sequelize");
const cors = require('cors');

const app = express();

const db = require("./models");
db.sequelize.sync();

var sequelize = new Sequelize("postgres://postgres:269rakshit@localhost:8081/studentdb");

/*
var corsOptions = {
	origin: "http://localhost:8081"
}
*/

//app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("This is home page");
});


const port = process.env.PORT || 8080;

require("./routes/student.routes")(app);

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});