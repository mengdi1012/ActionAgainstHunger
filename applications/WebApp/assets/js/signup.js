
var radios = document.getElementsByClassName('user_radio')
function myFunction() {
	for (var i = 0; i < radios.length; i++) {
		radios[i].onclick = function(evt) {
			var val = evt.target.value
			var nickname = document.getElementById("nickname").value
			if (val == "Teacher") {
				var prefix = document.getElementById("schoolname").value
				document.getElementById("username").value = prefix + '-' + nickname
			} else {
				var prefix = document.getElementById("profession").value
				document.getElementById('username').value = prefix + '-' + nickname
			}
		}
	}
}