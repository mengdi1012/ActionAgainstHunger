$(document).ready(function() {
});
function addonestudent(){
	var table = document.getElementById("myTable");
	var studentnum = table.rows.length;
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);;
	cell1.innerHTML = studentnum + 1;

	var myinput = document.createElement("INPUT");
	myinput.setAttribute('type', 'text');
	myinput.setAttribute('class', 'text-input');
	myinput.setAttribute('title','Type in nickname of student');
	myinput.setAttribute('placeholder','Nickname');
	myinput.setAttribute('name','nickname');
	myinput.setAttribute('required','true');
	cell2.innerHTML=" Nickname :"
	cell2.appendChild(myinput);
}

function myDeleteStudent() {
  
  document.getElementById("myTable").deleteRow(0);
}

