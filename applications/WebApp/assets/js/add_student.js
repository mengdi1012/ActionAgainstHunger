$(document).ready(function() {
	console.log('Javascript loaded');
});
function addonestudent(){
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
	cell2.innerHTML=" Nickname :";
	cell2.appendChild(myinput);
}

function myDeleteStudent() {
   document.getElementById("myTable").deleteRow(0);
}

function createStudent() {
	var studentTable = document.getElementById("myTable");
	var password = document.getElementById('password').value();
	const studentlist = []

	for (let j = 0; j < studentTable.length; j++) {
		//add students nickname
		studentlist.push(table.rows[0].cells[1].children[0].value);
		}

    let data = {
		studentnicklist: studentlist,
		password: password
	}

    $.ajax({
    url: "/createstudent",
    type: "POST",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: function(response) {
        window.alert('success');
    	}
	});
}

