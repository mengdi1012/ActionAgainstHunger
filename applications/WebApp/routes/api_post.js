module.exports = function (app, firebase) {

    function createClassroomPost(req, res){
        var userID = req.body.userID;
        var classroomID = req.body.classroomID;
        var postTitle = req.body.postTitle;
        var postContent = req.body.postContent;
        var dateCreated = req.body.dateCreated;
        var dateUpdated = req.body.dateUpdated;
        var postType = req.body.postType;
        
        if(classroomID == req.params.classroomID){
            firebase.firestore().collection('posts').add({
                userID: userID,
                classroomID: classroomID,
                postTitle: postTitle,
                postContent: postContent,
                dateCreated: dateCreated,
                dateUpdated: dateUpdated,
                postType: postType
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
        else{
            res.status(500).send("Error Adding Post");
        }
    }
    
    function getPostFromId(req, res){
        var postId = req.params.postId;
        
        firebase.firestore().collection("posts").doc(postId).get()
        .then(posts => {
            console.log(posts.id, '=>', posts.data()); 
            res.send({"postID": posts.id, "data": posts.data()});
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    

    function getPostsFromUser(req, res){
        var userID = req.params.userId;
        var userIDConst = 'userID';
        console.log("Retrieving posts with following attribute: " + userIDConst + " = " + userID);
        
        firebase.firestore().collection("posts").where(userIDConst, '==', userID).get()
        .then(posts => {
            if (posts.empty) {
                console.log('No Posts');
                res.send();
            } else {
                var allPosts = [];
                posts.forEach(eachPost => {
                    console.log(eachPost.id, '=>', eachPost.data()); 
                    allPosts.push({"postID": eachPost.id, "data": eachPost.data()});
                });
                res.send(allPosts);
            }  
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    
    function getPostsFromClassroom(req, res){
        var classroomID = req.params.classroomID;
        var classroomIDConst = 'classroomID';
        console.log("Retrieving posts with following attribute: " + classroomIDConst + " = " + classroomID);
        
        firebase.firestore().collection("posts").where(classroomIDConst, '==', classroomID).get()
        .then(posts => {
            if (posts.empty) {
                console.log('No Posts');
                res.send();
            } else {
                var allPosts = [];
                posts.forEach(eachPost => {
                    console.log(eachPost.id, '=>', eachPost.data()); 
                    allPosts.push({"postID": eachPost.id, "data": eachPost.data()});
                });
                res.send(allPosts);
            }  
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    
    function getCommentsFromUser(req, res){
        var userID = req.params.userID;
        var userIDconst = 'userID';
        console.log("Retrieving comments with following attribute: " + userIDconst + " = " + userID);
        
        firebase.firestore().collection("comments").where(userIDconst, '==', userID).get()
        .then(comments => {
            if ( comments.empty){
                console.log("No Comments");
                res.send();
            }
            else{
                var allComments = [];
                comments.forEach(eachComment => {
                    console.log(eachComment.id, '=>', eachComment.data()); 
                    allComments.push({"commentID": eachComment.id, "data": eachComment.data()});
                });
                res.send(allComments);
            }

        }) 
	    .catch(function(error) {
            console.log("Error Getting Comments:", error);
            res.status(500).send("Error Getting Comments");
	   });
    }
    
        function getCommentsFromPost(req, res){
        var postID = req.params.postID;
        var postIDconst = 'postID';
        console.log("Retrieving comments with following attribute: " + postIDconst + " = " + postID);
        
        firebase.firestore().collection("comments").where(postIDconst, '==', postID).get()
        .then(comments => {
            if ( comments.empty){
                console.log("No Comments");
                res.send();
            }
            else{
                var allComments = [];
                comments.forEach(eachComment => {
                    console.log(eachComment.id, '=>', eachComment.data()); 
                    allComments.push({"commentID": eachComment.id, "data": eachComment.data()});
                });
                res.send(allComments);
            }

        }) 
	    .catch(function(error) {
            console.log("Error Getting Comments:", error);
            res.status(500).send("Error Getting Comments");
	   });
    }
    
    
    
    function createNewComment(req, res){
        var postID = req.body.postID;
        var userID = req.body.userID;
        var dateCreated = req.body.dateCreated;
        var commentContent = req.body.commentContent;
        console.log(postID);
        if(postID == req.params.postID){
            firebase.firestore().collection('comments').add({
                userID: userID,
                dateCreated: dateCreated,
                commentContent: commentContent,
                postID: postID
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
        else{
            console.log("Here");
            res.status(500).send("Error Adding Comment");
        }
    }

    app.get('/api/user/:userId/posts', getPostsFromUser);
    app.get('/api/classroom/:classroomID/posts', getPostsFromClassroom);
    app.post('/api/classroom/:classroomID/posts', createClassroomPost);
    app.get('/api/post/:postId', getPostFromId);
    app.post('/api/post/:postID/comments', createNewComment);
    app.get('/api/post/:postID/comments', getCommentsFromPost);
    app.get('/api/user/:userID/comments', getCommentsFromUser);
 
}
