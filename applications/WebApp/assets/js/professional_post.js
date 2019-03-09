
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
	  e.preventDefault();
      let type = $("#type_c").val()
      let title =  $("#type_t").val()
      let content =  $("#content").val()
      const id = 123
      const date = new Date();
      let post_new = {
        type : type,
        title : title,
        content : content,
        id : id,
      }
      $.ajax({
            url: "/post",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(post_new),
            success: function(response) {
                window.alert('success');
            }
        });
      console.log(date);
    });




