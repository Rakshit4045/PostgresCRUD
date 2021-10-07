const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

//add new student
exports.create = (req, res) => {
	//Validate request
	if(!req.body.id){
		res.status(400).send({
			message: "Content cannot be empty!"
		});
		return;
	}

	//Create a student
	const {name, grade, id, school_id, age} = req.body;
    Student.create({
        name,
        grade,
        id,
        age
    })
    .then(student => res.status(200).send(student))
    .catch((e)=>{
    	res.send("Something went wrong");
    	console.log(e)
    });
};

//find all students
exports.findAll = (req, res) => {
	Student.findAll()
		.then(student => {
            res.status(200).send(student);
        })
        .catch((err)=>{
            console.log(err)
            res.sendStatus(500)
        });
}

exports.findOne = (req, res) => {
	const id = req.params.id;

	Student.findByPk(id)
		.then(data => {
			if(data){
				res.send(data);
			}else{
				console.log("Error while reteriving");
				res.status(404)
			}
		})
}

exports.update = (req, res) => {
	const id = req.params.id;

	Student.update(req.body, {
		where: {id: id}
	})
.then(num => {
		if(num == 1){
			res.send("Student was updated");
		}else{
			res.send("Cannot update Student");
		}
	})
	.catch(err => {
		res.send(err);
	});
}


exports.delete = (req, res) => {
	const id = req.params.id;

	Student.destroy({
		where: {id: id}
	})
	.then(num => {
		if(num == 1){
			res.send("Student was deleted");
		}else{
			res.send("Cannot delete Student");
		}
	})
	.catch(err => {
		res.send(err);
	});
}