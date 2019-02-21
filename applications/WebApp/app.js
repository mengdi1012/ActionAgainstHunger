var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/assets'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/assets/views');
app.set('view engine', 'html');

// Set up to use a session
app.use(session({
  secret: 'super_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

curCourse = new Object();
// An array to store chat messages.  We will only store messages
// as long as the server is running.
function goSigninpage(req, res){
  res.render('signin');
}

function test(req, res){
  console.log(req.session);
  console.log(req.session.email);
   if (req.session.email) {
      res.send("Hello!" + req.session.username + "\n");
   }else{
    res.send("who are you?");
   }
}

// Routes
// Serve the index page
app.get("/", goSigninpage);

//users routers
require('./routes/api_user')(app);
//require('./routes/api_course')(app, Users);
//require('./routes/api_lecture')(app);
//require('./routes/api_question')(app, Questions);


//for session test
app.get('/test', test);
 
 
app.listen(3000);
console.log('Listening on port 3000');
