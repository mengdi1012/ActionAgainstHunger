module.exports = function (app, firebase) {

function invite(req, res) {
	invite_email = req.body.email;
	usertype = 'teacher'
	if (!req.body.usertype) {
		usertype = 'guest'
	}

	// link to database 
	firebase.firestore().collection('users').doc().set({
		email: invite_email,
		password: '',
		username: '',
		usertype: usertype
		})
	.then(function() {
			console.log("Document successfully written!");
			sendInvitationEmail(invite_email);
	})
	.catch(function(error) {
			console.error("Error writing document: ", error);
	});
	return res.sendStatus(200)
}


function sendInvitationEmail(invite_email) {
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
		text: 'Please go to http://localhost:3000/signup for signup!!!'
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
