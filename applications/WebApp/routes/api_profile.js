module.exports = function (app, firebase) {

    function resetPW(req, res) {
        console.log("resetPW")
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
        firebase.firestore().collection("users").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let user = doc.data();
                if (user.username === signup_username ){
                    old_doc = doc.id;
                    email=user.email;
                    usertype= user.usertype;
                    console.log("found user", user)
                }
            });
            if(old_doc) {
                firebase.firestore().collection("users").doc(old_doc).delete().then(function(){
                    firebase.firestore().collection('users').doc(signup_username).set({
                        email: email,
                        password: password,
                        username: signup_username,
                        usertype: usertype
                    })
                        .then(function () {
                            console.log("Document successfully written!");
                            res.render('student-profile',{
                                username: req.session.username
                            });

                        })

                }).catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
        }
    })
    }

    app.get('/update_PW', resetPW);
    app.post('/update_PW', changePW);

};
