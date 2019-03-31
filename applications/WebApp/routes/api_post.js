module.exports = function (app, firebase) {

    function createPost(req, res){
        var author = req.session.username;
        var school = req.session.school;
        var content = req.body.content;
        var type = req.body.type;
        var title = req.body.title;
        console.log("creating pose", req.body);
        
        firebase.firestore().collection('posts').add({
            author: author,
            school: school,
            content: content,
            type: type,
            title: title,
            dateCreated: firebase.database.ServerValue.TIMESTAMP,
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

    function getPublicPosts(req, res){        
       console.log("ready to get all posts");
       var posts = [];
       if(req.session.username){
           firebase.firestore().collection("posts").get().then(function(querySnapshot) {
               querySnapshot.forEach(function(doc) {
                   // doc.data() is never undefined for query doc snapshots
                   console.log(doc.id, " => ", doc.data());
                   var post = doc.data()
                   if(post.type == "global"){
                    post['postId'] = doc.id;
                    post['content'] = ''
                    console.log(post);
                    posts.push(post);
                   }
               });
               console.log("found posts", posts);
               res.send(posts);	
           });
       }else{
           res.send(posts);
       }
    }
    
    function getPostById(req, res){
        var postId = req.params.postId;
        if(req.session.username){
            firebase.firestore().collection("posts").doc(postId).get()
            .then(doc => {
                console.log(doc.data());
                var post = doc.data()
                post['postId'] = doc.id;
                console.log(post);
                res.send(post);
            }) 
            .catch(function(error) {
                console.log("not post found:", error);
                res.status(500).send("No post found");
        });
        }else{
            res.status(500).send("Permission denied");
        }
    }
    

    function getPostsByUser(req, res){
        var user = req.params.user;
        var userConst = 'author';
        console.log("Retrieving posts with following attribute: " + userConst + " = " + user);
        
        firebase.firestore().collection("posts").where(userConst, '==', user).get()
        .then(posts => {
            if (posts.empty) {
                console.log('No Posts');
                res.send();
            } else {
                var allPosts = [];
                posts.forEach(eachPost => {
                    console.log(eachPost.id, '=>', eachPost.data()); 
                    allPosts.push(eachPost.data());
                });
                res.send(allPosts);
            }  
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    
    function getPostsBySchool(req, res){
        var school = req.params.school;
        var schoolConst = 'school';
        console.log("Retrieving posts with following attribute: " + schoolConst + " = " + classroomId);
        
        firebase.firestore().collection("posts").where(schoolConst, '==', school).get()
        .then(posts => {
            if (posts.empty) {
                console.log('No Posts');
                res.send();
            } else {
                var allPosts = [];
                posts.forEach(eachPost => {
                    console.log(eachPost.id, '=>', eachPost.data()); 
                    allPosts.push(eachPost.data());
                });
                res.send(allPosts);
            }  
        }) 
	    .catch(function(error) {
            console.log("Error Getting Post:", error);
            res.status(500).send("Error Getting Post");
	   });
    }
    
    function getCommentsByPost(req, res){
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
        var author = req.session.username;
        var postId = req.params.postId;
        var content = req.body.content;
        
        firebase.firestore().collection('comments').add({
            author: author,
            content: content,
            postId: postId,
            dateCreated: firebase.database.ServerValue.TIMESTAMP 
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

    app.post('/api/post', createPost);
    app.get('/api/post/', getPublicPosts);
    app.get('/api/post/:postId', getPostById);

    app.get('/api/post/user/:userId/', getPostsByUser);
    app.get('/api/post/school/:school/', getPostsBySchool);

    app.post('/api/comment/:postId', createComment);
    app.get('/api/comment/post/:postId/', getCommentsByPost);
}
