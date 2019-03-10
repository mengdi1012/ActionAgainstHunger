module.exports = function (app, firebase) {

// Set the username to empty by clearing the session
function logout(req, res) {
  console.log('logging out ' + req.session.name);
  req.session.destroy(function(err) {
    if (!err) {
      return res.json({});
		}
		res.redirect('/')
  })
}

function goTeacherSignUp(req, res){
  res.render('teacher_signup');
}

function goGuestSignUp(req, res){
	res.render('guest_signup');
  }

function signUpTeacher(req, res) {
	signup_email = req.body.email;
	signup_password = req.body.password;
	signup_username = req.body.username;
	signup_school = req.body.school;
	signup_usertype = "teacher"
	console.log(req)
	console.log("Ready to signup: ", signup_email, signup_password, signup_username, signup_school)

//--------------------------------
	var old_doc = undefined
	firebase.firestore().collection("users").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			user = doc.data()
			if (user.email == signup_email && user.password == ''){
				console.log("found user", doc)
				old_doc = doc.id
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
		res.redirect('/')		
	}
	}) 
	.catch(function(error) {
		console.log("Error getting document:", error);
		res.redirect('/')
	});
}

function signUpGuest(req, res) {
	signup_email = req.body.email;
	signup_password = req.body.password;
	signup_username = req.body.username;
	signup_profession = req.body.profession;
	signup_usertype = "guest"
	console.log(req)
	console.log("Ready to signup: ", signup_email, signup_password, signup_username, signup_profession)

//--------------------------------
	var old_doc = undefined
	firebase.firestore().collection("users").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			user = doc.data()
			if (user.email == signup_email && user.password == ''){
				console.log("found user", doc)
				old_doc = doc.id
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
		res.redirect('/')		
	}
	}) 
	.catch(function(error) {
		console.log("Error getting document:", error);
		res.redirect('/')
	});
}

function signIn(req, res){
	var email = req.body.email;
	var password = req.body.password;
	
	var logged_user = undefined
	firebase.firestore().collection("users").get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			user = doc.data()
			if (user.email == email && user.password != '' && user.password == password){
				console.log("found user", user)
				logged_user = user
			}
		});

	if(logged_user){
		req.session.username = logged_user.username; 
		req.session.usertype = logged_user.usertype;
		if (logged_user.school){
			req.session.school = logged_user.school;
		}else{
			req.session.profession = logged_user.profession;
		}
		console.log("Create session: ", req.session);
		if(req.session.usertype == 'student'){
			res.render('student-profile', {
				username: req.session.username
			});
		}
		else if(req.session.usertype == 'teacher'){
			res.render('teacher-profile', {
				username: req.session.username
		});
		}else if(req.session.usertype == 'guest'){
			res.render('teacher-profile', {
				username: req.session.username
		});    
		}else if(req.session.usertype == 'admin'){
			res.render('admin')
		}else{
			res.redirect('/')
		}	
	}else{
		console.log("No such user exist!");
		res.redirect('/')		
	}
	}) 
	.catch(function(error) {
		console.log("Error getting document:", error);
		res.redirect('/')
	});
}

app.get('/teacher_signup', goTeacherSignUp);
app.get('/guest_signup', goGuestSignUp);
app.post('/signup_teacher', signUpTeacher);
app.post('/signup_guest', signUpGuest);
app.post('/signin', signIn);
//app.post('/password',changePassword);
app.get('/logout', logout);
}
