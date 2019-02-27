module.exports = function (app) {


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

//firebase initialize
var firebase = require('firebase-admin'); 
var serviceAccount = require("../serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

function goSignUp(req, res){
  res.render('signup');
}

function signUp(req, res) {
	signup_email = req.body.email;
	signup_password = req.body.password;
	signup_username = req.body.username;
	// signup_isTeacher = req.body.isTeacher;
	signup_isTeacher = true

	// link to database 
	firebase.firestore().collection('users').doc().set({
		email: signup_email,
		password: signup_password,
		username: signup_username,
		isteacher: signup_isTeacher,
		})
	.then(function() {
			console.log("Document successfully written!");
	})
	.catch(function(error) {
			console.error("Error writing document: ", error);
	});
	res.redirect('/')
}

function signIn(req, res){
  var email = req.body.email;
	var password = req.body.password;
	
	var exist = false
	firebase.firestore().collection("users")
	.get().then(function(querySnapshot) {
		querySnapshot.forEach(function(doc) {
			user = doc.data()
			if (user.email == email && user.password == password){
				exist = true
			}
		});

		if(exist == true){
			req.session.username = user.username; 
			req.session.isteacher = user.isteacher; 
			console.log(req.session);
			if(req.session.isteacher){
				res.render('student-profile', {
					username: req.session.username
				});
			}else{
				res.render('student-profile', {
				username: req.session.username
			});    
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

app.get('/signup', goSignUp);
app.post('/signup', signUp);
app.post('/signin', signIn);
//app.post('/password',changePassword);
app.get('/logout', logout);
}
