$(function(){
var question_like_list = [];
var like_counter = "<span></span>"

function counter(e){
    if(e != undefined){
        ID = e.target.id;
        index = ID.slice(10, ID.length);
        question_like_list[index] += 1;
    }
    for(i = 0; i < question_like_list.length; i++){
        console.log(document.getElementById('likeButton' + i));
        my_span = document.getElementById('likeButton' + i).childNodes[1];
        my_span.innerHTML = question_like_list[i];
    }
}

document.getElementById('hideButton').addEventListener(
  'click', function() {
    document.getElementById("leftSide").classList.toggle('open-right');
    document.getElementById("feedList").classList.toggle('hide');
  });

$('#postButton').on('click', function(){
    page_number = $('#pageNumber').val();
    question = $('#myQuestion').val();
    console.log(page_number);
    console.log(question);
    if (page_number != ''  && question != '') {
        index = question_like_list.push(0) - 1;
        like_but = "<button class='like_buttons' id='likeButton" + index + "'> Like " + like_counter+ "</button>";
        post = "<article class='feed wrapper'>" + like_but + "<p class=='row'>Question" + index + "</p><p class=='row'>Page #:" + page_number +'<br> Content:' +question + "</p></article>";
        post += "<br><hr class='line'></br>";
        // console.log("herererere");
        // console.log(post);
        new_post = $('#feedList').append($(post));
        counter(null);
        document.getElementById('likeButton' + index).addEventListener("click", counter, false);
    }else{
        alert("wrong input");
    }
        document.getElementsByTagName("input")[0].value = null;
        document.getElementsByTagName("textarea")[0].value = null; 
 
    });
});