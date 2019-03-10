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
    
    

    function getPostsFromUser(req, res){
        var userId = req.params.userId;
        
        firebase.firestore().collection("posts").where('user', '==', userId).get()
        .then(posts => {
            console.log(posts);
            console.log(posts.data());
            res.send(posts.data());
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    
    function getComments(req, res){
        var postId = req.params.postId;
        
        firebase.firestore().collection("comments").where('post', '==', postId).get()
        .then(comments => {
            if ( comments.empty){
                console.log("No Comments");
                res.send();
            }
            
            var allComments = [];
            comments.forEach(eachComment => {
                console.log(eachComment.id, '=>', eachComment.data()); 
                allComments.push(eachComment.data());
            });
            res.send(allComments);
        }) 
	    .catch(function(error) {
            console.log("Error Getting Comments:", error);
            res.status(500).send("Error Getting Comments");
	   });
    }
    
    
    
    function createComment(req, res){
        var postId = req.params.postId;
        var authorId = req.body.author;
        var dateId = req.body.date;
        var contents = req.body.contents;
        
        firebase.firestore().collection('comments').add({
            author: authorId,
            date: dateId,
            content: contents,
            post: postId
        })
        .then(doc => {
            console.log("Successfully Added New Comment: " + doc.id);
            res.send({"Comment Id": doc.id});
        })
        .catch(function(error) {
            console.error("Error Writing New Comment ", error);
            res.status(500).send("Error Adding Comment");
        });
    }

    app.get('/api/user/:userId/posts', getPostsFromUser);
    app.get('/post/:postId', getPost);
    app.post('/post', createPost);
    app.get('/post/:postId/comments', getComments);
    app.post('/post/:postId', createComment);
}
