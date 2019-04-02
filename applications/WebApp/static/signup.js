$(document).ready(function() {
});

function createUsername(){
	var nickname = $("#nickname").val()
	var schoolname = $("#school").val()
	var username = nickname + '_' + schoolname
	$("#username").val(username)
}