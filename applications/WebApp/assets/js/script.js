// jQuery Document
$(document).ready(function() {
    // Do some initial setup
    getName();
    buildMessages();

    var avatar = 0;

    var map = {
        "<3": "\u2764\uFE0F",
        ":D": "\uD83D\uDE00",
        ":)": "\uD83D\uDE03",
        ";)": "\uD83D\uDE09",
        ":(": "\uD83D\uDE12"
    };
    
    // poll for new messages every 2.5 seconds
    var msgInterval = setInterval(buildMessages, 2500);
    
    
    // Register event handlers
    $("#post-name").click(function() {
        //0 for boy 1 for girl 
        avatar = 0;
        if (document.getElementById("girl").checked){
            avatar = 1;
        }
        postName(avatar);
    });
    
    // Set the user to empty string
    $("#logout").click(function() {
        logout();
    });

    // Stop polling for messages.  You will hvave to reload the
    // page to start polling again.
    $("#pause").click(function() {
        var exit = confirm("Are you sure you want to end the session?");
        if (exit == true) {
            clearInterval(msgInterval);
        }
    });

    // When the user enters a message send it to the server
    // The format of the message is: "username: message"
    // where username can be found in the content of the HTML
    // element of class "name", and the message comes from
    // the input text value.
    // Send it using a post message to "addmsg"
    $("#submitmsg").click(function() {
        var username = $(".name").html();
        var clientmsg = username + ": " + $("#usermsg").val();
        $.post("/addmsg", {
            text: clientmsg
        });
        $("#usermsg").val('');
        return false;
    });


    $(document).bind('keypress', function(e) {
        if(e.keyCode==13){
            $('#submitmsg').trigger('click');
        }
    });
    
    // Get the user name from the server by making an
    // ajax GET request to the url "/name"
    // The callback function on success will call updateUI
    // with the new value for name
    function getName() {
        $.ajax({
            type : "GET",
            url : "/name",
            dataType : "json",
            contentType: "application/json; charset=utf-8",
            success : function (response) {
                var name = response['name'];
                avatar = response['avatar'];
                updateUI(name);   
            }

        });
    }
    
    // Send the user name to the server
    function postName(avatar) {
        var name = $("#user-name").val();

        // Clear the text field
        $("#user-name").val("");

        $.ajax({
            url: "/name",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify( { "name": name, "avatar":avatar} ),
            success: function(response) {
                var name = response['name'];
                updateUI(name);
            }
        });
    }

    // Set the user name to empty
    function logout() {
        $.get("/logout", function(data) {
            updateUI("");
        });
    }

    // If the user has not entered a name show the name entry input
    // Otherwise display the name
    function updateUI(name) {
        $(".name").html(name);
        if (name !== '') {
            $("#name-form").hide();
            $("#nameShow").append(generateAvatar(avatar));
        } else {
            $("#name-form").show();
        }
    }

    // Get list of messages to display in the chat box
    function buildMessages() {
        $.get('messages', function(data) {
            let parent = $('#chatbox');
            parent.empty();

            //let messages = JSON.parse(data);
            let avatars =  data['avatars'];
            let messages = JSON.parse(data['allmsg']);
            for (let i = 0; i < messages.length; i++) {
                let tokenMsg = messages[i].split(" ");
                let name = tokenMsg[tokenMsg.length-1];
                imgHtml = generateAvatar(avatars[name]);
                let tmp = $('<p>').text(messages[i]);
                parent.append(tmp);
                parent.append(imgHtml);
            }
            $('#chatbox').animate({
                scrollTop: $('#chatbox').height()}, 1000);        
        });
    }


    function generateAvatar(id){
        imgHtml = '';
        if (id == 0){
            imgHtml = '<img src="assets/images/boy.jpg" alt="boy" width="22" height="22">';
        }
        else {
            imgHtml = '<img src="assets/images/girl.jpg" alt="girl" width="22" height="22">';
        }
        return imgHtml;
    }

    function escapeSpecialChars(regex) {
        return regex.replace(/([()[{*+.$^\\|?])/g, '\\$1');
    }
    document.getElementById('usermsg').oninput = function() {
        for (var i in map) {
            var regex = new RegExp(escapeSpecialChars(i), 'gim');
            this.value = this.value = this.value.replace(regex, map[i]);
        }
    }
    
});
