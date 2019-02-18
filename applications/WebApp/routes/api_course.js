module.exports = function (app, Users, Reviews) {

 function addCourse(req, res){
  var courseID = req.query.courseID;

  if(!req.session.isTeacher){
  //check if course exist
    Users.find({isTeacher: true}, function(err, allTeacher){
      var found = false;
      var index = 0;
      // console.log(allTeacher);
      // console.log(allTeacher.length);
      while((!found) && (index < allTeacher.length)){
        var teacher = allTeacher[index];
        // console.log(courseID);
        var courseList = teacher.courseList;
        if(courseList.indexOf(courseID) > -1) found = true;
        index++;
      }
      if(!found) return res.sendStatus(403);
      else{
          Users.update({email: req.session.email}, {$addToSet: {courseList: courseID}}, function(err, status){
          if (err) return res.sendStatus(403);
          else  return res.sendStatus(200);
          });
    } 
  });
  }
  else{
    Users.update({email: req.session.email}, {$addToSet: {courseList: courseID}}, function(err, status){
    if (err) return res.sendStatus(403);
    else  return res.sendStatus(200);
  });
  }
}

function deleteCourse(req, res){
  Users.update({email: req.session.email}, {$pull: {courseList: req.query.courseID}}, function(err, status){
  if (err) return res.sendStatus(403);
  else return res.sendStatus(200);
  });
}



// app.get('/profile', goProfilePage);
app.get('/course', addCourse);
app.delete('/course', deleteCourse);
}
