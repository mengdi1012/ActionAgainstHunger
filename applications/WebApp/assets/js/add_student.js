$(document).ready(function() {
	console.log('Javascript loaded');
	window.history.pushState("", "", '/');

	$("#nav-placeholder").load("assets/views/navigation.html");

});
var count = 1

function addonestudent(){
	count += 1
	var table = document.getElementById("myTable");
	var studentnum = table.rows.length;
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = studentnum + 1;

	var myinput = document.createElement("INPUT");
	myinput.setAttribute('type', 'text');
	myinput.setAttribute('class', 'text-input');
	myinput.setAttribute('title','Type in nickname of student');
	myinput.setAttribute('placeholder','Nickname');
	myinput.setAttribute('name','nickname');
	myinput.setAttribute('required','true');
	myinput.setAttribute('id',"nickname" + count);
	cell2.innerHTML=" Nickname :";
	cell2.appendChild(myinput);
}

function deleteonestudent() {
   count -= 1
   document.getElementById("myTable").deleteRow(0);
}

function createstudent() {
	var studentTable = document.getElementById("myTable");
	var password = document.getElementById('password').value;
	var studentlist = []

	for (let j = 1; j <= count; j++) {
		//add students nickname
		student = document.getElementById("nickname" + j).value;
		console.log(student);
		studentlist.push(student);
		}

    let data = {
		studentlist: studentlist,
		password: password
	}
	console.log("ready to create students: ", data);

    $.ajax({
    url: "/createstudent",
    type: "POST",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: function(response) {
		window.alert('success');
		location.href = '/profile';
		console.log(response);
    	}
	});
}

