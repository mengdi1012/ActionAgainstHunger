var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var app = express();

app.use(cors({origin: [
  "http://localhost:4200"
], credentials: true}));

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/static'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/static');
app.set('view engine', 'html');


// Set up to use a session
app.use(session({
  secret: 'super_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false}
}));

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

app.use((req, res, next) => {
  if (req.body) {
	  next();
	} else {
	  res.status(403).send({
		errorMessage: 'You need a payload'
	  });
	}
});


//firebase initialize
var firebase = require('firebase-admin'); 
var serviceAccount = require("./serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

// An array to store chat messages.  We will only store messages
// as long as the server is running.
function goSigninpage(req, res){
  res.render('index');
}

function goSignup(req, res){
  res.render('signup');
}

// Routes
// Serve the index page
app.get(['/', '/index', '/signin'], goSigninpage);
app.get('/signup', goSignup);

//users routers
require('./routes/api_user')(app, firebase);
require('./routes/api_admin')(app, firebase);
require('./routes/api_post')(app, firebase);
require('./routes/api_story')(app, firebase);
require('./routes/api_profile')(app, firebase);
require('./routes/api_notification')(app, firebase);
//require('./routes/api_classroom')(app, firebase);
//require('./routes/api_comments')(app, firebase);
 
 
 
app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});
