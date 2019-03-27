module.exports = function (app, firebase) {


function goUpdatePassword(req, res){
    console.log("go to update password page");
    res.render('update_pw');
}
    

function changePW(req, res) {
    const password = req.body.password;
    const signup_username = req.session.username;
    console.log("signup_username:",signup_username)
    console.log("Ready to signup: ", password)


//--------------------------------
    let old_doc = undefined
    let email =undefined
    let usertype= undefined
    let school = undefined
    // To update age and favorite color:
    firebase.firestore().collection("users").doc(signup_username).update({
        "password": password
    })
    .then(function() {
        console.log("Document successfully updated!");
        res.send({result:"suceess"})
    });
}





function getStudentInfo(req, res){
    school = req.session.school;
    firebase.firestore().collection(school).get().then(function(querySnapshot) {
        var students = [];
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            var student = []
            console.log(doc.id, " => ", doc.data().nickname);
            student.push(doc.data().nickname);
            student.push(doc.id);
            console.log(student);
            students.push(student);
        });
        console.log("found students", students);
        res.send({"students": students});	
    });
}

app.get('/updatepassword', goUpdatePassword);
app.get('/api/resetPW', changePW);
app.get('/get_student_info', getStudentInfo);


};
