module.exports = function (app) {
  // Set the username to empty by clearing the session

function startLecture(req, res){
  console.log(curCourse);
  var courseID = req.query.courseID;
  if(req.session.isTeacher){
    var lecDoc = req.query.lecDoc;
    console.log(lecDoc);
    if(lecDoc != "") curCourse[courseID] = lecDoc;
    res.render('lecture_teacher', {
      courseID: courseID,
      lecDoc: curCourse[courseID]
      });
  }else{
    res.render('lecture_student', {
      courseID: courseID,
      lecDoc: curCourse[courseID]
      });
  } 
}

function closeLecture(req, res){
  // console.log(userToLecture[req.session.email] in currentLectures); 
  var courseID = req.query.courseID;
  delete curCourse.courseID;
  // console.log(userToLecture[req.session.email] in currentLectures);
  return res.sendStatus(200); 
}


app.get('/lectureroom', startLecture);
app.delete('/lectureroom', closeLecture);
}
