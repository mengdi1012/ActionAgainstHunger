module.exports = function (app, Classroom) {


function createClassroom(req, res){
   var authorId = req.body.author;
        var classroomName = req.body.classroomName;
        var schoolName = req.body.schoolName;
        var type = req.body.type;
        
        firebase.firestore().collection('classrooms').doc().set({
            classroomName: classroomName,
            schoolName: schoolName,
            type: type
        })
        .then(doc => () {
            console.log("Successfully Added New Classroom: " + doc.id);
            res.send({"Classroom id": doc.id})
        })
        .catch(function(error) {
            console.error("Error Creating Classroom ", error);
            res.status(500).send("Error Creating classroom");
        });
}

function getClassroom(req, res){
  var classroomID = req.query.classroomID;

  firebase.firestore().collection("classrooms").doc(classroomID).get()
        .then(posts => {
            console.log(classrooms.data());
            res.send(classrooms.data());
        }) 
      .catch(function(error) {
            console.log("Error Getting classrooms:", error);
            res.status(500).send("Error Getting classrooms");
     });
}





app.get('/classroom', createClassroom);
app.post('/classroom/:classroomID', getClassroom);


}
