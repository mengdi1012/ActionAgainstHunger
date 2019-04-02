module.exports = function (app, firebase) {

    function createStory(req, res){
        console.log("trying to create new story");
        if(req.session.username){
            var author = req.session.username;
            var author = "t1_uoft"
            var content = req.body.content;
            var like = 0;
            console.log("creating story", req.body);
            
            firebase.firestore().collection('story').add({
                author: author,
                content: content,
                like: like,
                dateCreated: firebase.firestore.Timestamp.fromDate(new Date())
            })
            .then(doc => {
                console.log("Successfully Added New Story: " + doc.id);
                res.send({"StoryId": doc.id});
            })
            .catch(function(error) {
                console.error("Error Writing New Story ", error);
                res.status(500).send("Error Adding Story");
            });
        }else{
            res.status(500).send("Please Login!");
        }
    }

    function getStories(req, res){        
       console.log("ready to get all stories");
       var stories = [];
       if(req.session.username){
           firebase.firestore().collection("story").get().then(function(querySnapshot) {
               querySnapshot.forEach(function(doc) {
                   // doc.data() is never undefined for query doc snapshots
                //    console.log(doc.id, " => ", doc.data());
                    var story = doc.data()
                    story['storyId'] = doc.id;
                    // story['content'] = doc.content;
                    console.log(story);
                    stories.push(story);
               });
               console.log("found stories", stories);
               res.send(stories);	
           });
       }else{
           res.send(stories);
       }
    }
    

    function getStoriesByUser(req, res){
        if(req.session.username){
            var user = req.params.user;
            var userConst = 'author';
            console.log("Retrieving storys with following attribute: " + userConst + " = " + user);
            
            firebase.firestore().collection("story").where(userConst, '==', user).get()
            .then(storys => {
                if (storys.empty) {
                    console.log('No Stories');
                    res.send();
                } else {
                    var allStorys = [];
                    storys.forEach(eachStory => {
                        var story = eachStory.data()
                        story['storyId'] = eachStory.id;
                        allStorys.push(story);
                    });
                    res.send(allStorys);
                }  
            }) 
            .catch(function(error) {
                console.log("Error Getting Story:", error);
                res.status(500).send("Error Getting Story");
        });
        }else{
            res.status(500).send("Please Login!");
        }
    }

    function updateLike(req, res){
		// console.log("try to update like for story ",req.params.storyId);
        storyId = req.params.storyId;
        
        firebase.firestore().collection("story").doc(storyId).get()
        .then(doc => {
            var like = 0
            console.log(doc.data());
            like = doc.data()['like']
            console.log(like);
            like += 1;
            firebase.firestore().collection("story").doc(storyId).update({
                "like":like,
            })
            .then(doc => {
                // console.log("Successfully update this story like: " + storyId);
                res.send({"result": "success"});
            })
            .catch(function(error) {
                // console.error("Error Update this story like ", error);
                res.status(500).send("Error Update this story");
            });
        }) 
        .catch(function(error) {
            // console.log("Error getting document:", error);
            res.redirect('/')
        });
    }
    

    

    
    app.post('/api/story', createStory);
    app.get('/api/story', getStories);

    app.get('/api/story/user/:user', getStoriesByUser);
    app.get('/api/story/like/:storyId', updateLike);
}
