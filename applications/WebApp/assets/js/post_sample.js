$("#submit").click(function(e) {
    window.history.pushState("", "", '/');
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
            console.log(data);
            name = data.username;
            school = school + data.school;
            console.log(name, school);
            index.children()[1].text = name;
            index.children()[2].text = school;
            console.log();
            content = $("#comment_a").val();
            index[2].text = content;
            var post_id = "E9iKbBFqVWPQ1Kw3KfGD";
            var date = new Date();
        
        
            let comment = {
                postId: post_id,
                author: name,
                date: date,
                contents: content
            }
        
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
        }
    });

});



$("#status").click(function(e) {
    e.preventDefault();
    //here should has a function leads to the indicidual post page
    $.ajax({
        url: '/studentprofile',
        type: "GET",
        dataType: "json",
        success: function(data) {}
    });
});


$("#refresh").click(function(e) {
    e.preventDefault();

    let clone_one = $("#clone").clone();
    let index = clone_one.children().children();
    let name = "123123";
    let school = "School: ";
    let content = "";
    //here should has a function leads to the indicidual post page
    $.ajax({
        url: '/post/5w82VfkNVPom73gALVng/comments',
        type: "GET",
        dataType: "json",
        success: function(data) {
            name = data.userID;
            content = commentContent;



        }
    });

    index.children()[1].text = name;
    index.children()[2].text = school;
    index[2].text = content;
    clone_one.insertBefore("#comment_box");
});