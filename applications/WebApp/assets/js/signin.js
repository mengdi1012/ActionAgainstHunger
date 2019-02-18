$(document).ready(function() {
	const userEmail = document.getElementById("txtEmail");
	const userPass = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	
	btnLogin.addEventListener('click', e=>{
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = app_firebase.auth();
	
	//notify backend
	const promise = auth.signInWithEmailAndPassword(email, pass);
	
	promise
		.then(window.location.replace("/signin?email=" + email))
		.catch(e => console.log(e.message));
	});
});