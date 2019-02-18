var app_firebase = {};
(function(){
  // Initialize Firebase
	var config = {
		apiKey: "AIzaSyDA3CZVnV-L95KOj2_FC4T09FVJ2z4Tpbw",
		authDomain: "hungerteam-55dde.firebaseapp.com",
		databaseURL: "https://hungerteam-55dde.firebaseio.com",
		projectId: "hungerteam-55dde",
		storageBucket: "hungerteam-55dde.appspot.com",
		messagingSenderId: "770900129060"
		};
	firebase.initializeApp(config);
	app_firebase = firebase;
})()