
// class post{
//   constructor(id, title, description, date) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.date = date;
//   }
// }

// var post = Class.extend({
//   init: function(id,title,description,date){
//    this.id = id;
//     this.title = title;
//     this.description = description;
//     this.date = date;
//   },
// });


post = function(id,title,description,date) {
  this.init(id);
  this.init(title);
   this.init(description);
   this.init(date);
}

$.extend(post.prototype, {
   // object variables
 

   init: function(id,title,description,date) {
     // do initialization here
      this.id = id;
      this.title = title;
      this.description = description;
      this.date = date;
   },


});



$("#submit").click(function(e){
      e.preventDefault() 
      var type_1 = $("#type_c").val()
      var type = Number(type_1);
      let title =  $("#type_t").val()
      // $("#content").val()
      var content = $("#content").val()
      var id = 1
      var date = new Date();
      var author = 1;
      var classroom = 1;
      var post_new = {
        author : author,
        classroom : classroom,
        contents : content,
        type : type,
        title : title
      }
      console.log(post_new);
      $.ajax({
            url: "/post",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(post_new),
            success: function(response) {
                window.alert('success');
            }
        });
    });



$("#status").click(function(e){
      e.preventDefault() 
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
    });



$("#home").click(function(e){
      e.preventDefault() 
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
    });





