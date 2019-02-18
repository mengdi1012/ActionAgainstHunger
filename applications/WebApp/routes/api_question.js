module.exports = function (app, Question) {

function getQuestion(req, res){
  var courseID = req.query.courseID;

  Question.find({ $query: {courseID: courseID}, $orderby: { likes : -1 } }, function(err, theQuestions) {
    if (err || theQuestions.length == 0) {
        res.statusCode = 200;
        return res.json({question:[]});
    }
    res.statusCode = 200;
    return res.json({question: theQuestions});
  });
}

function addQuestion(req, res){
  // console.log('----------------------------');
  //console.log(req.session);
  var newQuestion = {
    courseID:req.query.courseID,
    page:req.body.page,
    desc:req.body.desc
  };
  new Question(newQuestion).save(function (err, newQuestion) {
    if(err) return res.send(err);
    return res.sendStatus(200);
  }); 
}

function deleteQuestion(req, res){
  var id = req.query.id;
  Question.findById(id, function(err, theQues) {
    // check if the id is valid
    if (err || theQues == undefined) {
      return res.sendStatus(404);
    } 
    else{
      Question.remove({_id:id}, function(err, theQues) {
      if (err) return res.send(err);
      return res.sendStatus(200);
    });
    }
  });
}

function likeQuestion(req, res){
  var id = req.query.id;
  var email = req.session.email;
  Question.findById(id, function(err, theQues) {
    if (err||theQues == undefined) {
      return res.sendStatus(404);
    }
    else{
      var likes = theQues.likes + 1;
      var likeList = theQues.likeList;
      console.log(req.session);
      likeList.push(email);
      console.log(likes);
      console.log(likeList);
      Question.update({_id:id},{likes:likes, likeList:likeList},function(err,update) {
        if (err) return res.send(err);
        else {
          Question.findById(id, function(err,theQues) {
          return res.sendStatus(200);
          });
        }
      });
    }
  });
}



app.get('/question', getQuestion);
app.post('/question', addQuestion);
app.delete('/question', deleteQuestion);
app.get('/like', likeQuestion);
}
