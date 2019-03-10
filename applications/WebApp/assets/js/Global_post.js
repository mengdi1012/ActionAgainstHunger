

// here is the part using the jquery.
$(document).ready(function(){
    $(".title").click(function(e){
      e.preventDefault();
      let title = $(".title").text()
      console.log(title);
      let full_name = "Post_" + title + ".html"
      window.open(full_name);
    });

	$("#search").click(function(e){
    e.preventDefault();
		let title = $("#search_area").val()
		let full_name = "Post_" + title + ".html"
    window.open(full_name);

    //here should has a function leads to the indicidual post page
     // $.ajax({
     //        url: "/signin",
     //        type: "POST",
     //        dataType: "json",
     //         contentType: "application/json; charset=utf-8",
     //        data: JSON.stringify(check),
     //        success: function(response) {
     //        window.alert('success');
     //        }
     //    });
  	});

  	
});

// get all the element that I needed 
const newpost = document.getElementById("refresh");
const profile =  document.getElementById("status");
const row = document.getElementById("row");
const home = document.getElementById("home");


newpost.addEventListener('click', add_post);
profile.addEventListener('click', go_profile);
home.addEventListener('click', go_home_page);



/// below is all the classes used
class post{
  constructor(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}



// below is the all the function using vallina js.

var title = "";
var description = "";

// add post into global page
function add_post(e) {
  e.preventDefault();

   $.ajax({
        url: '/post/LzTOfcoh0W9H4dcYA5JX',
        type: 'GET',
        dataType: 'json', // added data type
        success: function(data) {
          title = data.title;
          description = data.content;
          console.log(description);

          const  id = "1";
  // const title = "What is food addiction?";
  // const description = "Food addiction is a disease that causes someone to lose control of being able to stop eating some kinds of food, ...."
          var dateObj = new Date();
          var month = dateObj.getUTCMonth() + 1; //months from 1-12
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();
          newdate = year + "/" + month + "/" + day;
          const new_p = row.children[0].cloneNode(true);
          new_p.children[0].children[0].innerText = title;
          new_p.children[1].innerText = description;
          new_p.children[2].innerText = newdate;
          row.appendChild(new_p);
        }
    });






}

//assign the profile button and determine the user type to jump to the certian pages.

function go_profile(e) {
   e.preventDefault();
   // const type = "student";
   // if (type == "student") {
   //   const name = "student-profile.html"
   //    window.open(name)
   // }else if (type == "teacher") {
   //  const name = "teacher-profile.html"
   //    window.open(name)
   // }else if (type == "professional") {
   //  // const name = "teacher-profile.html"
   //  //   window.open(name)
   // }

   var email = "pan1@mailinator.com"
      var password = "123456"
      var check = {
        email : email,
        password : password
      }
      console.log(check);
      $.ajax({
            url: "/signin",
            type: "POST",
            dataType: "json",
             contentType: "application/json; charset=utf-8",
            data: JSON.stringify(check),
            success: function(response) {
            window.alert('success');
            }
        });
}


function go_home_page(e) {
  e.preventDefault();
   window.open("");
}









