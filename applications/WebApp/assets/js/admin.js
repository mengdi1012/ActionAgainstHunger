$(function(){
    window.history.pushState("", "", '/');
    $("#nav-placeholder").load("assets/views/admin_navigation.html");


    $('#invite-button').on('click', function(){
        email = $('#email').val();
        usertype = $("input[name='usertype']:checked").val();
        const url = '/invite';

        let data = {
            email: email,
            usertype: usertype
        }

        $("#email").val("");

        $.ajax({
            url: "/invite",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function(response) {
                window.alert('success');
            }
        });
    });
});