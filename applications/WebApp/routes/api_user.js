module.exports = function (app, firebase) {

// Set the username to empty by clearing the session
function logout(req, res) {
  console.log('logging out session' + req);
  req.session.destroy();  
  res.status(200).send({result:"success"})
}

function goTeacherSignUp(req, res){
  res.render('teacher_signup');
}

function goGuestSignUp(req, res){
	res.render('guest_signup');
}

function goProfile(req, res){
	console.log('go profile usertype: ', req.session.usertype == 'teacher');
	if(req.session.usertype == 'student'){
		res.render('student_profile', {
			username: req.session.username,
			school: req.session.school
		});
	}
	else if(req.session.usertype == 'teacher'){
		res.render('teacher_profile', {
			username: req.session.username,
			school: req.session.school
		});
	}
	else if(req.session.usertype == 'guest'){
		res.render('guest_profile', {
			username: req.session.username
		});
	}else{
		res.redirect('/')
	}
	
}

function getUserInfo(req, res){
	console.log("request user info", req.session);
	let user = {username: "", usertype: "", profession: "", school: ""}
	if(req.session.username){
		user.username = req.session.username;
		user.usertype = req.session.usertype;
		if(req.session.usertype == 'student' || req.session.usertype == 'teacher'){
			user.school = req.session.school;
		}
		if(req.session.usertype == 'guest'){
			user.profession = req.session.profession;
		}
	}
	res.send(user);
}

function signUp(req, res) {
	signup_email = req.body.email;
	signup_password = req.body.password;
	signup_username = req.body.username;
	signup_school = req.body.school;
	signup_profession = req.body.profession;
	signup_usertype = "teacher"
	console.log(req)
	console.log("Ready to signup: ", signup_email, signup_password, signup_username, signup_school)

	var old_doc = undefined
	firebase.firestore().collection("users").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			user = doc.data()
			if (user.email == signup_email && user.password == ''){
				console.log("found user", doc)
				old_doc = doc.id
				signup_usertype = user.usertype;
			}
		});

	if(old_doc){
		firebase.firestore().collection("users").doc(old_doc).delete().then(function() {
			console.log("Document successfully deleted!");
			// link to database 
			firebase.firestore().collection('users').doc(signup_username).set({
				email: signup_email,
				password: signup_password,
				username: signup_username,
				school: signup_school,
				profession: signup_profession,
				usertype: signup_usertype
				})
			.then(function() {
					console.log("Document successfully written!");
			})
			.catch(function(error) {
					console.error("Error writing document: ", error);
			});
			res.redirect('/')
		}).catch(function(error) {
			console.error("Error removing document: ", error);
		});	
	}else{
		console.log("No such user exist!");
		res.status(200).send({result:"fail"})	
	}
	}) 
	.catch(function(error) {
		console.log("Error getting document:", error);
		res.redirect('/')
	});
}

function signIn(req, res){
	var username = req.body.username;
	var password = req.body.password;
	console.log("authenticate: ", username, password);
	
	var user_doc = firebase.firestore().collection("users").doc(username);

	user_doc.get().then(function(doc) {
		if (doc.exists && doc.data().password != "" && doc.data().password == password) {
			user = doc.data()
			console.log("Document data:", doc.data());
			req.session.username = user.username; 
			req.session.usertype = user.usertype;
			if (user.school){
				req.session.school = user.school;
			}else{
				req.session.profession = user.profession;
			}
			console.log("Create session: ", req.session);
			res.send({result:"success", usertype:user.usertype})
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
			res.send({result:"fail"})
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
		res.send({result:"fail"})
	});
}

function createstudent(req, res) {
	if(req.session.usertype == 'teacher'){
		console.log("ready to create new students", req.body)
		var studentlist = req.body.studentlist;
		var password = req.body.password;
		var school = req.session.school;
		// link to database 
		var usernames = [];
		for (let i = 0; i < studentlist.length; i++) {
			nickname = studentlist[i].nickname
			username = school + '_student_' + i
			usernames.push(username)
			firebase.firestore().collection('users').doc(username).set({
				password: password,
				username: username,
				usertype: "student",
				school: school
			})
			.then(function() {
					console.log("Document successfully written!" + username );
			})
			.catch(function(error) {
					console.error("Error writing document: ", error);
			});

			firebase.firestore().collection(school).doc(username).set({
				nickname: nickname
			})
			.then(function() {
				console.log("Document successfully written!" + nickname );
			})
			.catch(function(error) {
					console.error("Error writing document: ", error);
			});
		}
		res.send({result:"success"})
	}else{
		res.send({result:"fail"})
	}
}

// function Jumptoreset(req, res){
//         if(req.session.username){
//             console.log("go to update password page");
//             res.render('resetPW');
//         }else{
//             return res.sendStatus(404)
//         }
//     }

app.get('/api/user', getUserInfo);
//app.get('/api/resetPW', Jumptoreset);
app.get('/api/user', getUserInfo);
app.get('/api/profile', goProfile);
app.get('/api/teacher_signup', goTeacherSignUp);
app.get('/api/guest_signup', goGuestSignUp);
app.post('/api/signup', signUp);
app.post('/api/signin', signIn);
app.get('/api/logout', logout);
app.post('/api/createstudent', createstudent);

}
