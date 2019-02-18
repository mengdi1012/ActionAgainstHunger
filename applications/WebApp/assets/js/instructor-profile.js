$(function(){
	document.getElementById('add-item-button').addEventListener(
  'click', function() {
  	post = "<input id='testInput'></input>";
  	sureButton = "<button id='testBut'>Add</button>"
  	post += sureButton;
    new_post = $('#courseList').append($(post));
    document.getElementById('testBut').addEventListener('click', function(){
    	course_list = document.getElementById("courseList")
    	new_course = $('#testInput').val();
    	course_list.removeChild(course_list.lastChild);
    	course_list.removeChild(course_list.lastChild);
    	course_list.append(new_course);
    });
  });
});