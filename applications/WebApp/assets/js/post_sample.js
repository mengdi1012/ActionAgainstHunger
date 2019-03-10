$("#submit").click(function(e){
      e.preventDefault() 
      let clone_one = $("#clone").clone();
      let index = clone_one.children().children();
      let name = "";
      let school = "";
      name = req.session.name;
      console.log(name);
       $.ajax({
        url: '/post/LzTOfcoh0W9H4dcYA5JX',
        type: 'GET',
        dataType: 'json', // added data type
        success: function(data) {
         
        }
    });
      index.children()[1].text;
      ndex.children()[2].text;


      clone_one.insertBefore("#comment_box");
    });



