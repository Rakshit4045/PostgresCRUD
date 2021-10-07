module.exports = app => {
	const students = require("../controllers/student.controller.js");
	var router = require("express").Router();

	//create student
	router.post("/", students.create);

	//Fetch students
	router.get("/", students.findAll);

	//Fetch single student
	router.get("/:id", students.findOne);

	//Update student
	router.put("/:id", students.update);

	//delete specific student
	router.delete("/:id", students.delete);

	app.use('/api/students', router);
};