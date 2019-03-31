module.exports = function (app, firebase) {


    

function changePW(req, res) {
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    const signup_username = req.session.username;
    console.log("signup_username:",signup_username)
    console.log("Ready to signup: ", password1)
    console.log("get body",req.body)


//--------------------------------
    let old_doc = undefined
    let email =undefined
    let usertype= undefined
    let school = undefined
    // To update age and favorite color:
    if(password1 === password2){
        firebase.firestore().collection("users").doc(signup_username).update({
        "password": password1
    })
    .then(function() {
        console.log("Document successfully updated!");
        res.send({result:"success"})
    });

    }else{
        console.log("password unmatch!");

    }
    
}





function getStudentInfo(req, res){
    console.log("ready to get student info");
    var students = [];
    if(req.session.usertype == "teacher"){
        school = req.session.school;
        firebase.firestore().collection(school).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                var student = {}
                console.log(doc.id, " => ", doc.data().nickname);
                student['nickname'] = doc.data().nickname;
                student['username'] = doc.id;
                console.log(student);
                students.push(student);
            });
            console.log("found students", students);
            res.send(students);	
        });
    }else{
        res.send(students);
    }
}

app.post('/api/update_pw', changePW);

app.get('/api/get_students', getStudentInfo);



};
