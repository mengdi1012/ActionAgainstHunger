module.exports = function (app, firebase) {

    function createPost(req, res){
        var authorId = req.body.author;
        var classroomId = req.body.classroom;
        var contents = req.body.contents;
        var type = req.body.type;
        
        firebase.firestore().collection('posts').add({
            author: authorId,
            classroom: classroomId,
            content: contents,
            type: type
        })
        .then(doc => {
            console.log("Successfully Added New Post: " + doc.id);
            res.send({"Post Id": doc.id});
        })
        .catch(function(error) {
            console.error("Error Writing New Post ", error);
            res.status(500).send("Error Adding Post");
        });
    }
    
    function getPost(req, res){
        var postId = req.params.postId;
        
        firebase.firestore().collection("posts").doc(postId).get()
        .then(posts => {
            console.log(posts.data());
            res.send(posts.data());
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }

    app.get('/post/:postId', getPost);
    app.post('/post', createPost);
}
