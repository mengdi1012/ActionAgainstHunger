module.exports = function (app, firebase) {

function createstudent(req, res) {
	var student_nick_list = req.body.studentnicklist;
	var password = req.body.password
	var createst_url =  "http://localhost:3000/createstudent"
	var teacher_school = req.seesion.teacher_school
	// link to database 
	for (let i = 0; i < student_nick_list.length; j++) {
		firebase.firestore().collection('users').doc().set({
			password: password,
			username: teacher_school + str(i),
			usertype: student
		})
		.then(function() {
				console.log("Document successfully written!");
		})
		.catch(function(error) {
				console.error("Error writing document: ", error);
		});
		res.send({result:"success"})
	}else{
		return res.sendStatus(404)
	}
}




app.post('/createstudent', createstudent);
}
