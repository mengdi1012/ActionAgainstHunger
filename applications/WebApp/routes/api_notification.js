module.exports = function (app, firebase) {

    
    function getNotification(req, res){
		console.log("get notification for ", user);
        var user = req.params.user;
        
        firebase.firestore().collection("notification").where('receiver', '==', user).get()
        .then(notification => {
			var allNotification = [];
            if ( notification.empty){
                console.log("No notification");
                res.send(allNotification);
            }
            
            notification.forEach(eachNotification => {
				notification = eachNotification.data()
				console.log(eachNotification.id, '=>', notification); 
                notification['notifId'] = eachNotification.id
                console.log("get notification, ", notification);
                allNotification.push(notification);
            });
            res.send(allNotification);
        }) 
	    .catch(function(error) {
            console.log("Error Getting notification:", error);
            res.status(500).send("Error Getting notification");
	   });
    }

    function createNotification(req, res){
        var commentId = req.params.commentId;
        var receiver = req.params.user;

        console.log("start for create notification")
        firebase.firestore().collection('notification').add({
            receiver: receiver,
            commentId: commentId,
            newNotif: true
        })
        .then(doc => {
            console.log("Successfully Added New Notification: " + doc.id);
            res.send({"result": "success"});
        })
        .catch(function(error) {
            console.error("Error Writing New Notification ", error);
            res.status(500).send("Error Adding Notification");
        });
	}

	function updateNotification(req, res){
		console.log("try to update notification ",req.params.notifId);
		notifId = req.params.notifId;
		firebase.firestore().collection("notification").doc(notifId).update({
            "newNotif":false,
        })
        .then(doc => {
            console.log("Successfully update this Notification: " + notifId);
            res.send({"result": "success"});
        })
        .catch(function(error) {
            console.error("Error Update Notification ", error);
            res.status(500).send("Error Delete Notification");
        });
    }

	app.post('/api/notification/create/:user/:commentId', createNotification);
	app.get('/api/notification/update/:notifId', updateNotification);
	app.get('/api/notification/:user', getNotification);

}
