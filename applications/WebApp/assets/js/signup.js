var radios = document.getElementsByClassName('user_radio')
for (var i = 0; i < radios.length; i++) {
	radios[i].onclick = function(evt) {
		var val = evt.target.value
		if (val == "Student") {
			document.getElementById('uoft_email').pattern = "[a-z0-9._%+-]+@mail.utoronto.ca|[a-z0-9._%+-]+@mail.utoronto.ca"
		} else {
			document.getElementById('uoft_email').pattern = "[a-z0-9._%+-]+@teach.utoronto.ca|[a-z0-9._%+-]+@edu.utoronto.ca"
		}
	}
}
