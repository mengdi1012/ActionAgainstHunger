$("#submit").click(function(e){
      e.preventDefault() 
      let clone_one = $("#clone").clone();
      let index = clone_one.children().children();
      let name = "123123";
      let school = "School: ";
      let content = "";
       $.ajax({
        url: '/user',
        type: 'GET',
        dataType: 'json', // added data type
        success: function(data) {
        	name = data.username;
        	school = school + data.school;
         
        }
    });
      index.children()[1].text = name;
      index.children()[2].text  = school;
      console.log();
      content =  $("#comment_a").val(); 
      index[2].text = content;
      var post_id = "E9iKbBFqVWPQ1Kw3KfGD";


 	let comment = {
      	author : name,
      	schoold : school,
      	content : content
      }
     

      // let comment = {
      // 	 author: name,
      // 	  date: school,
      //     contents: content,
      //    postId: post_id
      // }

      clone_one.insertBefore("#comment_box");

      $.ajax({
        url: '/post/E9iKbBFqVWPQ1Kw3KfGD',
        type: 'Post',
       	dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(comment),
        success: function(response) {
        window.alert('success');
        }
    });

    });



