$(document).ready(function() {
});

function createUsername(){
	var nickname = $("#nickname").val()
	var profession = $("#profession").val()
	var username = nickname + '_' + profession
	$("#username").val(username)
}