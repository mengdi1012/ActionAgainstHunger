module.exports = function (app, firebase) {

    function createPost(req, res){
        console.log("trying to create new post");
        if(req.session.username){
            var author = req.session.username;
            var school = 'default';
            if (req.session.school){
                school = req.session.school;
            }
            var content = req.body.content;
            var type = req.body.type;
            var title = req.body.title;
            console.log("creating post", req.body);
            
            firebase.firestore().collection('posts').add({
                author: author,
                school: school,
                content: content,
                type: type,
                title: title,
                dateCreated: firebase.firestore.Timestamp.fromDate(new Date())
            })
            .then(doc => {
                console.log("Successfully Added New Post: " + doc.id);
                res.send({"Post Id": doc.id});
            })
            .catch(function(error) {
                console.error("Error Writing New Post ", error);
                res.status(500).send("Error Adding Post");
            });
        }else{
            res.status(500).send("Please Login!");
        }
    }

    function getPublicPosts(req, res){        
       console.log("ready to get all posts");
       var posts = [];
       if(req.session.username){
           firebase.firestore().collection("posts").get().then(function(querySnapshot) {
               querySnapshot.forEach(function(doc) {
                   // doc.data() is never undefined for query doc snapshots
                //    console.log(doc.id, " => ", doc.data());
                   var post = doc.data()
                   if(post.type == "global"){
                    post['postId'] = doc.id;
                    // post['content'] = doc.content;
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
            res.status(500).send("Please Login!");
        }
    }
    

    function getPostsByUser(req, res){
        if(req.session.username){
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
                        var post = eachPost.data()
                        post['postId'] = eachPost.id;
                        allPosts.push(post);
                    });
                    res.send(allPosts);
                }  
            }) 
            .catch(function(error) {
                console.log("Error Getting Post:", error);
                res.status(500).send("Error Getting Post");
        });
        }else{
            res.status(500).send("Please Login!");
        }
    }
    
    function getPostsBySchool(req, res){
        console.log("trying to get posts by school");
        if(req.session.username){
            var school = req.params.school;
            var schoolConst = 'school';
            
            firebase.firestore().collection("posts").where(schoolConst, '==', school).get()
            .then(posts => {
                if (posts.empty) {
                    console.log('No Posts');
                    res.send();
                } else {
                    var allPosts = [];
                    posts.forEach(eachPost => {
                        var post = eachPost.data()
                        post['postId'] = eachPost.id;
                        allPosts.push(post);
                    });
                    res.send(allPosts);
                }  
            }) 
            .catch(function(error) {
                console.log("Error Getting Post:", error);
                res.status(500).send("Error Getting Post");
        });
        }
        else{
            res.status(500).send("Please Login!");
        }
    }
    
    function getCommentsByPost(req, res){
        console.log("trying to get comments by post");
        if(req.session.username){
            var postId = req.params.postId;
            
            firebase.firestore().collection("comments").where('postId', '==', postId).get()
            .then(comments => {
                if ( comments.empty){
                    console.log("No Comments");
                    res.send();
                }
                
                var allComments = [];
                comments.forEach(eachComment => {
                    allComments.push(eachComment.data());
                });
                res.send(allComments);
            }) 
            .catch(function(error) {
                console.log("Error Getting Comments:", error);
                res.status(500).send("Error Getting Comments");
            });
        }else{
            res.status(500).send("Error Getting Comments");
        }
    }

    function createComment(req, res){
        console.log("ready to create new comment", req.body.content);
        if(req.session.username){
            var author = req.session.username;
            var postId = req.params.postId;
            var content = req.body.content;
            
            firebase.firestore().collection('comments').add({
                author: author,
                content: content,
                postId: postId,
                dateCreated: firebase.firestore.Timestamp.fromDate(new Date())
            })
            .then(doc => {
                console.log("Successfully Added New Comment: " + doc.id);
                res.send({"result": "success","commentId":doc.id});
            })
            .catch(function(error) {
                console.error("Error Writing New Comment ", error);
                res.status(500).send("Error create comment");
            });
        }else{
            res.status(500).send("Please login!");
        }
    }

    function getComment(req, res){
		console.log("get a Comment with commentId");
        var commentId = req.params.commentId;
        console.log("with this comment id",commentId);
        firebase.firestore().collection("comments").doc(commentId).get()
            .then(doc => {
                console.log(doc.data());
                var comment = doc.data();
                comment['commentId'] = doc.id;
                console.log(comment);
                res.send(comment);
            }) 
            .catch(function(error) {
                console.log("not comment found:", error);
                res.status(500).send("No comment found");
            });
    }
    

    
    app.post('/api/post', createPost);
    app.get('/api/post', getPublicPosts);
    app.get('/api/post/:postId', getPostById);

    app.get('/api/post/user/:user', getPostsByUser);
    app.get('/api/post/school/:school', getPostsBySchool);

    app.post('/api/comment/:postId', createComment);
    app.get('/api/comment/post/:postId', getCommentsByPost);
    app.get('/api/comment/comment/:commentId', getComment);
}
