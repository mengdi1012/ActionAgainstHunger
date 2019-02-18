module.exports = function (app) {


  // Set the username to empty by clearing the session
function logout(req, res) {
  console.log('logging out ' + req.session.name);
  req.session.destroy(function(err) {
    if (!err) {
      return res.json({});
    }
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
	signup_isTeacher = req.body.isTeacher;

    // create authentication user
	firebase.auth().createUser({
	  email: signup_email,
	  password: signup_password,
	  displayName: signup_username
	})
	  .then(function(userRecord) {
		// See the UserRecord reference doc for the contents of userRecord.
		console.log("Successfully created new user:", userRecord.uid);
		// link to database 
		firebase.firestore().collection('users').doc(userRecord.uid).set({
			email: userRecord.email,
			username: userRecord.displayName,
			isteacher: signup_isTeacher,
			})
		})
	  .catch(function(error) {
		console.log("Error creating new user:", error);
	  });
	  res.redirect('/')
}

function signIn(req, res){
  console.log("got it");
  var email = req.query.email;
  console.log(email);
  res.statusCode = 200;
  res.render('student-profile');
}



app.get('/signup', goSignUp);
app.post('/signup', signUp);
app.get('/signin', signIn);
//app.post('/password',changePassword);
//app.get('/logout', logout);
}
