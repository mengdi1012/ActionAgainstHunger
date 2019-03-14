$(function(){
	window.history.pushState("", "", '/');
	$("#nav-placeholder").load("assets/views/navigation.html");

	$.ajax({
		url: "/get_student_info",
		type: "GET",
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function(response) {
				console.log(response);

				const students = response.students
				for (let j = 0; j < students.length; j++) {
				const student = students[j]
				addStudenToScreen(student[0], student[1])
			}
		}

		
	});


	function addStudenToScreen(nickname, username){
		var table = document.getElementById("studentTable");
		var studentnum = table.rows.length;
		var row = table.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = nickname;
	
		var myinput = document.createElement("SPAN");
		myinput.setAttribute('type', 'text');
		myinput.setAttribute('name','nickname');
		cell2.innerHTML=	username;
		cell2.appendChild(myinput);
	}
});