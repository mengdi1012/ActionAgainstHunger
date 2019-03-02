module.exports = function (app, firebase) {

function invite(req, res) {
	if(req.session.username){
		var invite_email = req.body.email;
		var usertype = req.body.usertype
		var signup_url =  "http://localhost:3000/teacher_signup"
		console.log("invite usertype: ", req.body.usertype )
		signup_url =  "http://localhost:3000/" + usertype +"_signup"

		// link to database 
		firebase.firestore().collection('users').doc().set({
			email: invite_email,
			password: '',
			username: '',
			usertype: usertype
			})
		.then(function() {
				console.log("Document successfully written!");
				sendInvitationEmail(invite_email, signup_url);
		})
		.catch(function(error) {
				console.error("Error writing document: ", error);
		});
		res.send({result:"success"})
	}else{
		return res.sendStatus(404)
	}
}


function sendInvitationEmail(invite_email, signup_url) {
	var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'Teamhunger966@gmail.com',
			pass: 'QWERASDF'
		}
	});

	var mailOptions = {
		from: 'Teamhunger966@gmail.com',
		to: invite_email,
		subject: 'Welcome to action against hunger',
		text: 'Please go to ' + signup_url +' for signup!!!'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}


app.post('/invite', invite);
}
