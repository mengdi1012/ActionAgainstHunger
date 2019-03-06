module.exports = function (app, firebase) {

    function createPost(req, res){
        var authorId = req.body.author;
        var classroomId = req.body.classroom;
        var contents = req.body.contents;
        var type = req.body.type;
        
        firebase.firestore().collection('posts').doc().set({
            author: authorId,
            classroom: classroomId,
            content: contents,
            type: type
        })
        .then(function() {
            console.log("Successfully Added New Post");
        })
        .catch(function(error) {
            console.error("Error Writing New Post ", error);
        });
        console.log(authorId);
        console.log("too late");
    }
    
    function getPost(req, res){
        var postId = req.body.post;
        console.log(postId);
    }


    app.get('/post', getPost);
    app.post('/post', createPost);
}
