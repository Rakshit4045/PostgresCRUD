module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define("student", {
		name: {
			type: Sequelize.STRING
		},
		grade: {
	        type: Sequelize.INTEGER,
	        validate: {
	            isNumeric: true,
	            min: 1,
	            max: 12
	        }
	    },
	    id: {
	        type: Sequelize.INTEGER,
	        primaryKey: true,
	        autoIncrement: true 
	    },
	    //foregin key
	    /*
	    school_id: {
	        type: Sequelize.INTEGER,
	        references: {
	        	model:'school_table',
	        	key: 'id'
	        }
	    },*/
	    age: {
	        type: Sequelize.INTEGER
	    }
	});

	return Student;
};