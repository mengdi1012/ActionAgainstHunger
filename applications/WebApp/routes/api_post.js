module.exports = function (app, Users, Reviews) {

    function createPost(req, res){
        var authorId = req.body.author;
        var classroomId = req.body.classroom;
        var contents = req.body.contents;
        var type = req.body.type;
        console.log(classroomId);
    }
    
    function getPost(req, res){
        var postId = req.body.post;
        console.log(postId);
    }


    app.get('/post', createPost);
    app.post('/post', getPost);
}
