

$(function(){
    window.history.pushState("", "", '/');
    $("#nav-placeholder").load("assets/views/navigation.html");


    $('#set').on('click', function(){
        const pw=  $('#password').val();
        const rePW=$('#password2').val();
        console.log("pw1:",pw,"pw2:",rePW)
        let data = {
            password: pw,
        }
        if(pw!==rePW){
            console.log("incorrect re-enter password")
        }
        else{
            console.log("pw1:",pw,"pw2:",rePW)
            $.ajax({
                url: "/update_pw",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                success: function(response) {
                    window.alert('success');
                    location.href = '/profile';
                }
            });


        }
    })
});
